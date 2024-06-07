import Bruchetta from '../Assets/bruchetta.jpg'
import GreekSalad from '../Assets/greeksalad.jpg'
import LemonDessert from '../Assets/lemondessert.jpg'
import "./Menu.css"


const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-header">
        <div><h1 className="menu-text">This weeks specials!</h1></div>
        <div><button className='online-menu-btn'>Online Menu</button></div>
      </div>

      <div className="card-container">
        <div className="card">
          <img src={Bruchetta} alt="greeksalad" className="dish-img" />
          <div className="card-content">
            <div className="dish-heading-container">
              <h2 className="dish-name">Greek salad</h2>
              <p className="dish-price">$12.99</p>
            </div>
            <div className="dish-description">
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary cruotons.</p>
            </div>
            <div>
              <a>Order a delivery <i className="arrow"></i></a>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={GreekSalad} alt="greeksalad" className="dish-img" />
          <div className="card-content">
            <div className="dish-heading-container">
              <h2 className="dish-name">Greek salad</h2>
              <p className="dish-price">$12.99</p>
            </div>
            <div className="dish-description">
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary cruotons.</p>
            </div>
            <div>
              <a>Order a delivery <i className="arrow"></i></a>
            </div>
          </div>
        </div>


        <div className="card">
          <img src={LemonDessert} alt="greeksalad" className="dish-img" />
          <div className="card-content">
            <div className="dish-heading-container">
              <h2 className="dish-name">Greek salad</h2>
              <p className="dish-price">$12.99</p>
            </div>
            <div className="dish-description">
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary cruotons.</p>
            </div>
            <div>
              <a>Order a delivery <i className="arrow"></i></a>
            </div>
          </div>
        </div>


        

      </div>

    </div>
  )
}

export default Menu