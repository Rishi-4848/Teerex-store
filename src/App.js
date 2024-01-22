
import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { Route,Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Cart from './Components/Cart/Cart';

function App() {


// array to store the cart items
  let cartArr =[]
  
  // function to fetch the cartitmes selected in productpage
  const fetchCartItems = (product)=>{
     if(cartArr.length && cartArr.some((item)=> item.id === product.id)){
      cartArr.pop(product)
      cartArr.push(product)
      window.alert("item already in the cart")
    }else{
       cartArr.push(product)
       window.alert("Added to the cart Successfully")
    }
 
  }

  // function to delete cart items  deleted in cart page
  const deleteCartItem = (product)=>{
   cartArr.pop(product)

  }

  return (
    <div className="App">

     <Header/>

     <Routes>

      <Route exact path='/' element={<HomePage  fetchCartItems={fetchCartItems} />}/>
      
    <Route path='/cart' element={<Cart   cart={cartArr}  deleteCartItem={deleteCartItem}/>}/>
    
     </Routes>
   
    
    </div>
  );
}

export default App;
