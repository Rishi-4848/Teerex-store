import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import "./SearchBar.css";

const SearchBar = ({setSearchDataProp ,productsDataProp}) => {

  //state to keep track of timer of input to get the searched data
  const [debounceTimeOut ,setDebounceTimeout] = useState(0);
  
  // function to filter the data based on searched text
  const searchFilter = (value)=>{
    let searchData =  productsDataProp.filter((product,index)=>(
         product.name.toLowerCase().includes(value) ||
         product.color.toLowerCase().includes(value) ||
         product.type.toLowerCase().includes(value)
    ))
      setSearchDataProp(searchData)
      
     console.log(searchData)
   }
 
//function to apply timeout between applying searchfilter funcion
   const debounceSearch = (e,debounceTimeOut)=>{
  let value = e.target.value;

  if(debounceTimeOut){
    clearTimeout()
  }

  let timeout = setTimeout(()=>{
    searchFilter(value)
  },500)
  
  setDebounceTimeout(timeout)
   }

  return (
    <div className='search__wrapper'>
       <input placeholder='Search for Products...'  onChange={(e)=> debounceSearch(e,debounceTimeOut)}/>
       <div className='search-button-container'>
       <CiSearch  className='search__wrapper-icon'/>
       </div>
      
      
    </div>
  );
}

export default SearchBar;
