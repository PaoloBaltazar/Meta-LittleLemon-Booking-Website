import FooterLogo from '../Assets/FooterLogo.png'
import { scroller } from 'react-scroll'
import { Link } from 'react-router-dom'
import facebook from '../Assets/Socials/facebook.svg'
import instagram from '../Assets/Socials/instagram.svg'
import twitter from '../Assets/Socials/twitter.svg'
import "./Footer.css"

const Footer = () => {

  const handleFooterClick = (section) => {
      scroller.scrollTo(section, {
        duration: 500,
        delay: 100,
        smooth: true,
        offset: -90,
      });

  };

  return (
    <footer>
      <div className='footer-container'>
        <div>
          <img className="footer-logo" src={FooterLogo} alt='little lemon logo'/>
        </div>

        <div>
          <ul className="footer-list">
            <h3>Little Lemon</h3>
            <li>
              <span onClick={() => handleFooterClick('hero')}>
                Home
              </span>
            </li>

            <li>
              <span onClick={() => handleFooterClick('testimonials')}>
                Testimonials
              </span>
            </li>

            <li>
              <span onClick={() => handleFooterClick('about')}>
                About
              </span>
            </li>

            <li>
              <Link to ="/booking" className="nav-link">Reservation</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="footer-list">
            <h3>Contact</h3>
            <li><i >Lemon 331 E Chicago LaSalle <br/> Street Chicago, Illinois 60602 USA</i></li>
            <li>311-555-2368</li>
            <li>littlelemon@bookings.com</li>
          </ul>
        </div>

        <div>
          <ul className="footer-list">
            <h3>Social Media</h3>
            <li><img className="social-img" src={facebook}/></li>
            <li><img className="social-img" src={instagram}/></li>
            <li><img className="social-img" src={twitter}/></li>
          </ul>
        </div>
      </div>

      <div className="copyright-text">
      <p>&copy; Copyright 2024 Paolo I. Baltazar. Don't claim as your own.</p>
      </div>
    </footer>
  )
}

export default Footer;