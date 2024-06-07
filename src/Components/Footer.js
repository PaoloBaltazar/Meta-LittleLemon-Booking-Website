import FooterLogo from '../Assets/FooterLogo.png'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div>
          <img className="footer-logo" src={FooterLogo} alt='little lemon logo'/>
        </div>

        <div>
          <ul className="footer-list">
            <h3>Little Lemon</h3>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>

        <div>
          <ul className="footer-list">
            <h3>Contact</h3>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>

        <div>
          <ul className="footer-list">
            <h3>Social Media Links</h3>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>

    </footer>
  )
}

export default Footer;