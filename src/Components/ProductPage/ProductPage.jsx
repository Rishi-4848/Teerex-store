import React, {  useEffect, useState } from 'react';


import "./ProductPage.css";



const ProductPage = ({ displayData ,fetchCartItems}) => {
 

  return (
    <div className='products__wrapper'>
      {
        displayData.map((product,index)=>(
          <div className='card__wrapper' key={index}>
          <div className='card__header'>
            <div className='card__img-container'>
              <img src={product.imageURL} alt={product.name}/>
            </div>
            <p>{product.name}</p>
          </div>
          <div className='card__footer'>
            <p>
            Rs {product.price}
            </p>
            <button type='button' onClick={()=>fetchCartItems(product)}>Add To Cart</button>
          </div>
        </div>
          
        ))
      }
      
    </div>
  );
}

export default ProductPage;
