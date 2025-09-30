const Visualizations = () => {
  return (
    <section 
      id='viztab' 
      className="content" 
      style={{ 
        marginTop: '3rem', 
        marginBottom: '1.5rem', 
        marginLeft: '1rem', 
        marginRight: '1.5rem' 
      }}
    >
      <div className="text-center container">
        <a 
          href="https://public.tableau.com/app/profile/evan.johnson" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-decoration-none"
        >
          <figure className='image is-128x128 d-inline-block'>
            <img 
              src="/pics/tableau-software.svg" 
              alt="Tableau Software"
              className="img-fluid"
            />
          </figure>
        </a>
        <div className='subtitle'>Click to Visit My Tableau Profile</div>
      </div>

      <hr />

      <div className="content">
        <div className="text-center title is-3">Selected Visualizations</div>
      </div>

      <div className='container' id='overview'>
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-6 mb-4">
            <a
              href="https://public.tableau.com/profile/evan.johnson#!/vizhome/CumulativeStatePolicyCountsoverTime2/Dashboard1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="card-image">
                <figure className="image is-5by3">
                  <img 
                    className='hvr-pulse-grow img-fluid' 
                    style={{ borderRadius: '3%' }} 
                    src="/pics/proj1.gif"
                    alt="Cumulative State Policy Counts over Time"
                  />
                </figure>
              </div>
            </a>
          </div>

          <div className="col-lg-8 col-md-6">
            <div className="content">
              <div className="container content">
                <h2 className="title">Cumulative State Policy Counts over Time</h2>
                <p className="block">
                  Cumulative totals of policy concentration and policy topics from 2000 up to
                  2015. User has option to track state TBED policy activity by Topic and Context. Darker
                  color represents more cumulative policies along the user-specified grouping and years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className='container' id='overview'>
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-6 mb-4">
            <a 
              href="https://amd-visualization-armanios-et-al-2020.now.sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="card-image">
                <figure className="image is-5by3">
                  <img 
                    className='hvr-pulse-grow img-fluid' 
                    style={{ borderRadius: '3%' }} 
                    src="/pics/proj2.gif"
                    alt="Concentration in Policy Topic and Context over Time"
                  />
                </figure>
              </div>
            </a>
          </div>

          <div className="col-lg-8 col-md-6">
            <div className="content">
              <div className="container content">
                <h2 className="title">Concentration in Policy Topic and Context over Time</h2>
                <p className="block">
                  The level of concentration based on the depth (blue)
                  or breadth (red) of policy activity. Three temporal shifts tracing five (to six) years
                  of activity to reflect broader trends in the data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visualizations;
