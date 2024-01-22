import React, { useState,useEffect } from 'react';
import ProductPage from "../ProductPage/ProductPage"
import SearchBar from '../SearchBar/SearchBar';
import { FaFilter } from "react-icons/fa";
import FilterPage from '../FilterPage/FilterPage';
import {fetchData } from "../Api/Api";
import "./HomePage.css"


const HomePage = ({fetchCartItems}) => {
 
  //state to handle the toggle of filterpage
  const [toggle,setToggle] = useState(false);

  //state to assign all products data
  const [productsData,setProductsData] = useState([]);

  //state to get the search data from searchbar.jsx
  const [searchData,setSearchData] = useState("");

  //state to keep track of color filters
  const [color,setColor] = useState([]);

  //state to keep track of gender filters
  const [gender,setGender] = useState([]);

  //state to keep track of price filters
  const [price ,setPrice] = useState([]);

  //state to keep track of type filters
  const [type,setType] = useState([]);

 
 
  //function apply all filters on products data and get display data
 
  const ApplySearch =(color,gender,type,price,searchData)=>{
    
    let updatedData = [...productsData]
  
    //filtering based on searched data
    if(searchData.length){
      updatedData = updatedData.filter((product)=>{
        let found = false
        searchData.forEach((search)=> {
          if(search.id === product.id){
            found = true
          }
        })
        return found
    })
    }else{
      updatedData = [...updatedData]
    }


    //filtering based on color filters
    if(color.length){
      updatedData = updatedData.filter((product)=>color.includes(product.color.toLowerCase()))
    }

    //filtering based on gender filters
    if(gender.length){
      updatedData = updatedData.filter((product)=> gender.includes(product.gender.toLowerCase()))
    }

    //filtering based on type filters
    if(type.length){
      updatedData = updatedData.filter((product)=> type.includes(product.type.toLowerCase()))
    }

  //filtering based on price filters
    if(price.length){
      updatedData = updatedData.filter((product)=>{
        let found = false;
         price.forEach((priceRange)=>{
          let low  = priceRange.split("-")[0];
          let max = priceRange.split("-")[1];
           if(Number(product.price)>= Number(low) && Number(product.price)<= Number(max)){
            found = true
           }
         })
         return found
        })
    }


    return updatedData
  }
  
//assigning filtered data to display data to export as prop to products page
  const displayData = ApplySearch(color,gender,type,price,searchData);



  //function to generate products data
  const generateProductsData = async ()=>{

   
    try{
      let res = await fetchData()
      setProductsData(res)
      
    }catch(err){
      console.log(err)
    }
  }


  
  useEffect(()=>{
   generateProductsData()
  
  },[])


  //function used to toggle the filterpage
  const toggleFunction = ()=>{
    setToggle((prev)=>!prev)
  }


  // function to keep track of selected  color filters

  const colorFilterFunction = (event)=>{
   let isChecked = event.target.checked;

   if(isChecked){
      setColor((prevState)=>[...prevState,event.target.value])
   }else{
     setColor((prevState)=>
      prevState.filter((item)=> item !== event.target.value)
     )
   }
  }


   // function to keep track of selected  gender filters
  const genderFilterFunction = (event)=>{
    let isChecked = event.target.checked;

    if(isChecked){
      setGender((prevState)=>[...prevState,event.target.value])
    }else{
     
      setGender((prevState)=>
      prevState.filter((item)=> item !==event.target.value)
      )
    }
  }

   // function to keep track of selected  price filters
  const priceFilterFunction = (event) =>{
    const isChecked = event.target.checked;

    if(isChecked)
    setPrice((prevState) =>[...prevState,event.target.value])
    else
    setPrice((prevState)=>
   prevState.filter((item)=> item!== event.target.value))

  }


   // function to keep track of selected  type filters
  const typeFilterFunction = (event)=>{
    let isChecked = event.target.checked;

    if(isChecked){
      setType((prevState)=>[...prevState,event.target.value])
    }else{
       setType((prevState)=>
       prevState.filter((item)=> item!==event.target.value))
    }
  }



  return (
    <div>
       <SearchBar productsDataProp={productsData}  setSearchDataProp={setSearchData}/>
     <div className='filters__dropmenu'>

     <FaFilter className='filter__icon' onClick={()=>toggleFunction()}/>
     {toggle?
     (  <FilterPage   colorFilterFunction={colorFilterFunction} colorProp={color} genderFilterFunction={genderFilterFunction} 
      genderProp={gender} priceFilterFunction={priceFilterFunction} priceProp={price} typeFilterFunction={typeFilterFunction} typeProp={type}/>)
      :(
        ""
      )
     }
     </div>
     
     <div className='filter__products'>
      <div className='main__filters'>
         <FilterPage  colorFilterFunction={colorFilterFunction} colorProp={color} genderFilterFunction={genderFilterFunction} 
         genderProp={gender} priceFilterFunction={priceFilterFunction} priceProp={price} typeFilterFunction={typeFilterFunction} typeProp={type}/>
     
      </div>
     <ProductPage productsDataProp={productsData}  displayData={displayData}  fetchCartItems={fetchCartItems}/>
       
     </div>
    </div>
  );
}

export default HomePage;
