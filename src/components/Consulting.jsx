const Consulting = () => {
  return (
    <section 
      id='consul' 
      className="content" 
      style={{ 
        marginTop: '3rem', 
        marginBottom: '1.5rem', 
        marginLeft: '1rem', 
        marginRight: '1.5rem' 
      }}
    >
      <div className='container' id='overview'>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <figure className="image text-center">
              <img 
                src="https://arclightanalytics.com/pictures/arclight_logo_horizontal.png" 
                alt="ArcLight Analytics Logo"
                className="img-fluid"
              />
            </figure>
            <h2 className="title">ArcLight Analytics</h2>
            <p>
              <strong>Website:</strong>{' '}
              <a 
                href="https://arclightanalytics.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                https://arclightanalytics.com
              </a>
            </p>
          </div>

          <div className="col-lg-8 col-md-6">
            <div className="content">
              <div className="container content">
                <h3 className="subtitle">About ArcLight Analytics</h3>
                <p className="block">
                  Arclight Analytics was founded by Dr. Evan Johnson, a researcher with the University of
                  North Carolina at Chapel Hill with over ten years of experience in quantitative research
                  and policy analysis. Dr. Johnson has a passion for using quantitative research and data
                  analytics tools to solve problems in policy and management, and has recruited a team of
                  like-minded analysts that make up Arclight Analytics.
                </p>
                <p className="block">
                  Dr. Johnson and his team at Arclight are skilled in data analytics, data visualization,
                  geospatial analysis, and programming. Our work benefits clients in the public, private,
                  and academic sectors looking to solve problems and improve strategy using large
                  datasets. We employ a variety of analytical tools to perform program evaluation and
                  causal inference; econometric analysis and data manipulation; and exploratory data
                  analysis. After identifying important trends and key findings from the data, we utilize
                  advanced data visualization techniques to communicate these findings to stakeholders and
                  translate complex datasets into digestible conclusions. Specific areas of expertise
                  include data science for business, government incentives for innovation,
                  entrepreneurship and strategy research.
                </p>
                <p className="block">
                  We at Arclight believe that careful analysis of large datasets can shed light on
                  important trends and insights into how your organization's strategy is working in
                  practice. Our goal is to bring a rigorous academic approach to analysis of your data, to
                  allow your organization to make the most informed decisions moving forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
