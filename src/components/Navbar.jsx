import { useState } from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
    setIsMenuOpen(false);
  };

  return (
    <section id='navigation'>
      <style>
        {`
          .navbar, .navbar * {
            border: none !important;
            box-shadow: none !important;
          }
          
          .navbar {
            background-color: transparent !important;
            padding: 0.1rem 0 !important;
          }
          
          .navbar-brand {
            font-family: 'Futura', 'Futura-Bold', 'Trebuchet MS', Arial, sans-serif !important;
            font-weight: bold !important;
            font-size: 2rem !important;
            color: var(--primary-color) !important;
            text-decoration: none !important;
          }
          
          .navbar-brand:hover {
            color: var(--primary-hover) !important;
          }
          
          .nav-tabs {
            border: none !important;
            background-color: transparent !important;
          }
          
          .nav-tabs .nav-link {
            border: none !important;
            color: var(--text-dark) !important;
            font-family: 'Futura', 'Futura-Bold', 'Trebuchet MS', Arial, sans-serif !important;
            font-weight: bold !important;
            font-size: 1.1rem !important;
            padding: 0.5rem 1rem !important;
            margin: 0 0.3rem !important;
            border-radius: 8px !important;
            transition: all 0.2s ease !important;
          }
          
          .nav-tabs .nav-link:hover {
            background-color: var(--light-bg) !important;
            color: var(--primary-color) !important;
            transform: translateY(-2px) !important;
          }
          
          .nav-tabs .nav-link.active {
            background-color: var(--primary-color) !important;
            color: white !important;
          }
          
          .navbar-toggler {
            border: none !important;
            padding: 0.25rem 0.5rem !important;
          }
          
          .navbar-toggler:focus {
            box-shadow: none !important;
          }
          
          .navbar-collapse {
            background-color: white !important;
            border-radius: 8px !important;
            margin-top: 0.25rem !important;
            padding: 0.5rem !important;
            box-shadow: none !important;
          }
          
          @media (max-width: 768px) {
            .navbar-brand {
              font-size: 1.5rem !important;
            }
            
            .nav-tabs .nav-link {
              font-size: 1rem !important;
              padding: 0.4rem 0.8rem !important;
              margin: 0.1rem 0 !important;
              display: block !important;
              text-align: center !important;
            }
            
            .navbar-collapse {
              margin-top: 0.25rem !important;
              padding: 0.5rem !important;
            }
          }
        `}
      </style>

      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container'>
          <a
            className='navbar-brand'
            href='#'
            onClick={(e) => {
              e.preventDefault();
              handleTabClick(1);
            }}
          >
            Evan Johnson
          </a>

          <button
            className='navbar-toggler'
            type='button'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          >
            <ul className='nav nav-tabs ms-auto'>
              <li className='nav-item'>
                <button
                  className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
                  onClick={() => handleTabClick(1)}
                >
                  Home
                </button>
              </li>
              <li className='nav-item'>
                <button
                  className={`nav-link ${activeTab === 2 ? 'active' : ''}`}
                  onClick={() => handleTabClick(2)}
                >
                  Publications
                </button>
              </li>
              <li className='nav-item'>
                <button
                  className={`nav-link ${activeTab === 3 ? 'active' : ''}`}
                  onClick={() => handleTabClick(3)}
                >
                  Data Visualizations
                </button>
              </li>
              <li className='nav-item'>
                <button
                  className={`nav-link ${activeTab === 4 ? 'active' : ''}`}
                  onClick={() => handleTabClick(4)}
                >
                  Teaching
                </button>
              </li>
              <li className='nav-item'>
                <button
                  className={`nav-link ${activeTab === 5 ? 'active' : ''}`}
                  onClick={() => handleTabClick(5)}
                >
                  Consulting
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
