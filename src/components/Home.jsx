const Home = () => {
  return (
    <section
      id='hometab'
      className='content'
      style={{
        marginTop: '1rem',
        marginBottom: '1.5rem',
        marginLeft: '1rem',
        marginRight: '1.5rem',
      }}
    >
      <div className='container' id='overview'>
        <div className='row justify-content-center'>
          <div className='col-lg-4 col-md-6 mb-4'>
            <div className='card-image text-center'>
              <figure className='image'>
                <img
                  style={{
                    borderRadius: '3%',
                    width: '100%',
                    height: 'auto',
                    maxWidth: '300px',
                    objectFit: 'cover',
                  }}
                  src='/pics/headshot.jpg'
                  alt='Evan Johnson headshot'
                  className='img-fluid'
                />
              </figure>
            </div>
            <div
              className='content text-center'
              style={{ padding: '15px 10px', marginTop: '10px' }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  maxWidth: '300px',
                  margin: '0 auto',
                }}
              >
                <a
                  href='https://www.dropbox.com/s/r5p89zor8d1w1ie/evanjohnson_cv_051021.docx?dl=0'
                  className='button is-dark hvr-shrink'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    width: '200px',
                    display: 'block',
                    textAlign: 'center',
                    margin: '0 auto',
                  }}
                >
                  <span className='icon'>
                    <i className='fas fa-file-alt'></i>
                  </span>
                  <span>Download CV</span>
                </a>

                <a
                  href='https://scholar.google.com/citations?hl=en&user=OIBM7u4AAAAJ&scilu=&scisig=AMD79ooAAAAAX4Cmr-s4WlV7EG28LkI3zeD8dUdW-GQQ&gmla=AJsN-F6w4IGGIwd3BefGVc06xghrx_zpOgWrZpgrc9IpeOOe1S5xzkh6zhNniDv9Wm8Sir3KxOxuTlR2eWp9QGe0p6wcthS73FuZBx55s2NunGSCcKL8eaA&sciund=6400592896362238328'
                  className='button is-dark hvr-shrink'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    width: '200px',
                    display: 'block',
                    textAlign: 'center',
                    margin: '0 auto',
                  }}
                >
                  <span className='icon'>
                    <i className='fab fa-google'></i>
                  </span>
                  <span>Google Scholar</span>
                </a>
              </div>
            </div>
          </div>

          <div className='col-lg-8 col-md-6'>
            <div className='content' id='index-intro'>
              <div className='container'>
                <p className='block'>
                  Dr. Evan Johnson is a researcher with the University of North
                  Carolina at Chapel Hill with over ten years of experience in
                  quantitative research and policy analysis. His research
                  focuses on innovation and public policy, with specific foci
                  including energy innovation, climate stabilization and the
                  impacts of Federal R&D funding on high-tech firms. His work
                  involves heavy use of econometric, geo-spatial, and data
                  science tools to solve economic problems in energy and
                  innovation.
                </p>

                <p className='block'>
                  His published work appears in leading academic journals,
                  including Research Policy and Energy Research & Social
                  Science. He serves as Principal Consultant on two Evaluation
                  Panels at the U.S. National Academies of Science, Engineering
                  and Medicine, where he has authored reports for Congress to
                  aid in evaluating Public R&D programs for innovation and
                  entrepreneurship. He also has won NSF grants to study
                  government incentives for innovation and small businesses.
                </p>

                <p className='block'>
                  Dr. Johnson is an Adjunct Teaching Assistant Professor at
                  UNC-Chapel Hill. He has taught numerous courses in public
                  policy and public administration, including research design,
                  methods for analysis and evaluation, quantitative methods for
                  policy analysis, and energy policy. Dr. Johnson holds masters
                  and doctoral degrees in public policy from the University of
                  Wisconsin and the University of North Carolina, respectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
