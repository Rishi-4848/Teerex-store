import React, { useEffect, useState } from 'react';
import "./FilterPage.css";

//created a array of data to loop through
const colors = ["red","blue","green","black"];
const gender =["men","women"];
const priceRange = ["0-250","251-450","451-500"];
const type = ["polo","hoodie","basic"];

const FilterPage = ({genderFilterFunction,colorFilterFunction,priceFilterFunction ,typeFilterFunction ,colorProp,genderProp,typeProp,priceProp}) => {

//exported functions as props from homepage

  return (
    <div className='filter__wrapper'>
      <div className='filter__sections'>
        <h1>
          Color
        </h1>
        <div className='filter__types'>
        {
          colors.map((color)=>(
            <div key={color}>
            <input type='checkbox'  value={color} checked={colorProp.includes(color)}  onChange={colorFilterFunction}/>
            <label>{color}</label>
            </div>
          ))
        }
        </div>
      </div>

      <div className='filter__sections'>
        <h1>
          Gender
        </h1>
        <div className='filter__types'>
       
          {
            gender.map((gender)=>(
              
         <div key={gender}>
         <input type='checkbox'   value={gender} checked={genderProp.includes(gender)} onChange={genderFilterFunction}  />
          <label>{gender}</label>
         </div>
            ))
          }
        </div>
      </div>


      <div className='filter__sections'>
        <h1>
          Price
        </h1>
        <div className='filter__types'>
         {
          priceRange.map((price)=>(
            <div key={price}>
            <input type='checkbox' value={price} checked={priceProp.includes(price)} onChange={priceFilterFunction} />
             <label> {price} Rs</label>
            </div>
          ))
         }    

        </div>
      </div>


      <div className='filter__sections'>
        <h1>
          Type
        </h1>
        <div  className='filter__types'>
        {
          type.map((type)=>(
            <div key={type}>
            <input type='checkbox'  value={type} checked={typeProp.includes(type)} onChange={typeFilterFunction}  />
             <label>{type}</label>
            </div>
          ))
        }

        </div>
      </div>
    </div>
  );
}

export default FilterPage;
