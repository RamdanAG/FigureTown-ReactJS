import '../style/Footer.css';
import IMAGELOGO from '../image/Logo/Logo.png'
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section logo-section">
            <img className='logof' src={IMAGELOGO} alt="" />
            <p>FINDYOURHOBBY</p>
            <input type="email" placeholder="Enter your email" />
            <button className='subs'>Subscribe</button>
          </div>
          <div className="footer-section">
            <h3>Information</h3>
            <ul>
              <li>About Us</li>
              <li>More Figure</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Helpful Links</h3>
            <ul>
              <li>Services</li>
              <li>Support</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Tag</h3>
            <ul>
              <li>#Anime</li>
              <li>#Manga</li>
              <li>#Tokusatsu</li>
              <li>#Figure</li>
              <li>#PopUpParade</li>
            </ul>
          </div>
          <div className="footer-section contact-section">
            <h3>Contact Us</h3>
            <p>+91 9999 999 999</p>
            <p>FigureTown.com</p>
            <div className="social-icons">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-linkedin"></i>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>2024 © figuretown.com | All rights reserved.</p>
          <div>
            <span>FAQ</span>
            <span>Privacy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
