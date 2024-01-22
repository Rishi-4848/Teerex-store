import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";
import { useNavigate } from 'react-router-dom';

const Header = () => {

  //navigation property to navigate through pages
  const navigate= useNavigate();
  return (
    <div className='header__wrapper'>
      <div  onClick={()=>navigate("/")}>
      <h3 className='header__title' >TeeRex Store</h3>
      </div>
      
      <div className='header__child'>
        <h3>Products</h3>
         <FaShoppingCart className='header__child-icon'  onClick={()=> navigate("/cart")}/>
        
      </div>
    </div>
  );
}

export default Header;
