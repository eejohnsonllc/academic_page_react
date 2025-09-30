import { useState, useEffect } from 'react';
import Papa from 'papaparse';

const Teaching = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load courses from CSV
    const loadCourses = async () => {
      try {
        const response = await fetch('/syllabi.csv');
        if (!response.ok) {
          throw new Error('Failed to load courses data');
        }
        
        const csvText = await response.text();
        
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            if (results.data && results.data.length > 0) {
              // Sort by Order field
              const sortedCourses = results.data
                .filter(course => course.ClassName && course.ClassName.trim() !== '')
                .sort((a, b) => parseFloat(a.Order || 0) - parseFloat(b.Order || 0));
              setCourses(sortedCourses);
            }
            setLoading(false);
          },
          error: (error) => {
            console.error('Error parsing CSV:', error);
            setError('Failed to load course data');
            setLoading(false);
          }
        });
      } catch (err) {
        console.error('Error loading courses:', err);
        setError('Failed to load course data');
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  if (error) {
    return (
      <section
        id='teaching'
        className='content'
        style={{
          marginTop: '3rem',
          marginBottom: '1.5rem',
          marginLeft: '1rem',
          marginRight: '1.5rem',
        }}
      >
        <div className='container' id='overview'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <h2 className='title'>Teaching Overview</h2>
            </div>
            <div className='col-lg-8 col-md-6'>
              <div className='alert alert-warning' role='alert'>
                {error}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id='teaching'
      className='content'
      style={{
        marginTop: '3rem',
        marginBottom: '1.5rem',
        marginLeft: '1rem',
        marginRight: '1.5rem',
      }}
    >
      <div className='container' id='overview'>
        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <h2 className='title'>Teaching Overview</h2>
          </div>
          <div className='col-lg-8 col-md-6'>
            <div className='content'>
              <div className='container content' id='course_list'>
                {loading ? (
                  <div className='text-center'>
                    <div className='spinner-border text-primary' role='status'>
                      <span className='visually-hidden'>
                        Loading courses...
                      </span>
                    </div>
                    <p className='mt-2'>Loading courses...</p>
                  </div>
                ) : courses.length === 0 ? (
                  <div className='alert alert-info' role='alert'>
                    No courses available at this time.
                  </div>
                ) : (
                  courses.map((course, index) => (
                    <div key={index} className='mb-4'>
                      <div className='d-flex justify-content-between align-items-start mb-2'>
                        <h4 className='title is-4 mb-0'>{course.ClassName}</h4>
                        {course.Syllabus && (
                          <a
                            href={course.Syllabus}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn btn-sm btn-outline-primary'
                          >
                            Syllabus
                          </a>
                        )}
                      </div>
                      <p className='subtitle is-6 text-muted mb-2'>
                        {course.ClassNum} - {course.SchoolYear}
                      </p>
                      {course.Descption && (
                        <p className='block'>{course.Descption}</p>
                      )}
                      {index < courses.length - 1 && <hr />}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;