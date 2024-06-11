import React from "react";
import "./Menu.css";
import { specials } from '../data';

console.log('Specials:', specials);

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-header">
        <div><h1 className="menu-text">This week's specials!</h1></div>
        <div><button className='online-menu-btn'>Online Menu</button></div>
      </div>

      <div className="card-container">
        {specials.map((special) => (
          <div className="card" key={special.id}>
            <img src={special.image} alt={special.name} className="dish-img" />
            <div className="card-content">

              <div className="dish-heading-container">
                <h2 className="dish-name">{special.name}</h2>
                <p className="dish-price">{special.price}</p>
              </div>

              <div className="dish-description">
                <p>{special.description}</p>
              </div>

              <div>
                <a>Order a delivery <i className="arrow"></i></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
