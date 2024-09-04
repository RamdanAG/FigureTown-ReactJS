import React from 'react';
import '../style/Navbar.css';
import ImageLogo from '../image/Logo/Logo.png';
import Cart from '../image/Logo/cart-shopping-solid.svg';

const Navbar = () => {
  return (
    <>
      {/* First Navbar */}
      <nav className="navbar navbar-top">
        <div className="navbar-item logo">
          <img className='IMGlogo' src={ImageLogo} alt="Taito Logo" />
        </div>
        <h6 className='headingNavitem'><a href="">Product</a></h6>
        <h6 className='headingNavitem'><a href="">Store</a></h6>
        <h6 className='headingNavitem'><a href="">Event</a></h6>
        <hr className='Hrline' />
        <div className="navbar-item">
            <button><a href="">Cart</a></button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
