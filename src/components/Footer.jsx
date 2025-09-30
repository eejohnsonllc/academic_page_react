const Footer = () => {
  return (
    <section className='pagefooter'>
      <style>
        {`
          .pagefooter {
            margin-top: 1rem;
            width: 100%;
          }
          
          .footer {
            background-color: #363636 !important;
            color: white !important;
            padding: 0.75rem 0 !important;
            width: 100% !important;
            position: relative !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 100 !important;
            min-height: 50px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          
          .footer a {
            color: white !important;
            font-size: 1.3rem !important;
            font-family: 'Futura', 'Futura-Bold', 'Trebuchet MS', Arial, sans-serif !important;
            font-weight: bold !important;
            text-decoration: none !important;
            transition: color 0.2s ease !important;
          }
          
          .footer a:hover {
            color: #f8f9fa !important;
            text-decoration: underline !important;
          }
          
          .footer .content {
            font-size: 1.3rem !important;
            font-family: 'Futura', 'Futura-Bold', 'Trebuchet MS', Arial, sans-serif !important;
            font-weight: bold !important;
            color: white !important;
            width: 100% !important;
            text-align: center !important;
          }
          
          .footer .content div {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 0.5rem !important;
            flex-wrap: wrap !important;
          }
          
          /* Mobile responsive footer */
          @media (max-width: 768px) {
            .pagefooter {
              margin-top: 0.75rem;
            }
            
            .footer {
              padding: 0.5rem 0 !important;
              min-height: 45px !important;
            }
            
            .footer a {
              font-size: 1.1rem !important;
            }
            
            .footer .content {
              font-size: 1.1rem !important;
            }
            
            .footer .content div {
              flex-direction: column !important;
              gap: 0.5rem !important;
              align-items: center !important;
            }
          }
          
          @media (max-width: 576px) {
            .pagefooter {
              margin-top: 0.5rem;
            }
            
            .footer {
              padding: 0.4rem 0 !important;
              min-height: 40px !important;
            }
            
            .footer a {
              font-size: 1rem !important;
            }
            
            .footer .content {
              font-size: 1rem !important;
            }
          }
        `}
      </style>

      <footer className='footer'>
        <div className='content'>
          <div>
            <span>Evan Johnson</span> |{' '}
            <a href='mailto:evanej@live.unc.edu'>evanej@live.unc.edu</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
