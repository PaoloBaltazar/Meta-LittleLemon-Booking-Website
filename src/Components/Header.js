import heroImage from '../Assets/HeroImage.jpg'
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  return (
    <>
      <header>
        <section className="hero-section">
          <div className="text-section">
            <h2 className="title">Little Lemon</h2>
            <h3 className="subtitle">Chicago</h3>
            <p className="description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/booking">
              <button className="reserve-button">Reserve a Table</button>
            </Link>
          </div>
          <div>
            <img src={heroImage} className='hero-image' alt='Little Lemon'/>
          </div>
        </section>
      </header>
    </>
  )
}

export default Header;