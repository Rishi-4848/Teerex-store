
import React, { useEffect, useState } from 'react';
import "./Cart.css";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";



const Cart = ({cart ,deleteCartItem}) => {
 
  //state to get the total value
 const [total ,setTotal] = useState(0)

 // state to set cart items 
  const [cartData ,setCartData] = useState([]);

  //function to cart items to state
   const fetchCart = ()=>{
    setCartData(cart)
   }


   //function to delete item from the cart
   const deleteFunction =(product,id)=>{
    let data = cartData.filter((product)=>(
      product.id !==id
    ))
    deleteCartItem(product)
    setCartData(data)
   }

 
   //function to count the total price of cart items
   const initialTotal =()=>{
    let sum =0
     for(let i=0;i<cartData.length;i++){
       sum+=cartData[i].price*1
     }
     setTotal(sum);
   }


   //intializing intialcount function whenever cartdata changes
   useEffect(()=>{
    initialTotal()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[cartData])



   const ItemQuantity = ({item,id,qty})=>{

   
     //state to keep track of quantity of cart item
    const [quantity,setQuantity] = useState(1);

 
    //function to reduce the quantity
       const decrementor = ()=>{

         if(quantity > 1){
          setQuantity(quantity-1)
           
         }

         if(quantity === 1){
            let data = cartData.filter((product)=>(
              product.id !==id
            ))
            deleteCartItem(item)
            setCartData(data)
         }
            
   }


   //function to increase the quantity

   const incrementor = (qty)=>{

   
      if(quantity < qty){
        setQuantity(quantity+1)
      }
      if(quantity === qty){
        setQuantity(quantity)
        window.alert("Product quantity limit reached")
      }
    
        
   }


 

    return(
             
           <div className='item__quantity'>
           <CiCircleMinus className='quantity__icon' onClick={()=>decrementor(qty)}/>
           <p >{quantity}</p>
           <CiCirclePlus className='quantity__icon' onClick={()=> incrementor(qty)}/>

          </div>
    )
   }


  useEffect(()=>{
    fetchCart()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cart])


  return (
    <div className='cart__wrapper'>
      {cartData.length ? (
        cartData.map((item ,index)=>(
          <div key={index} className='item__wrapper'>
           <div className='item__img'>
            <img src={item.imageURL} alt='image1'/>
           </div>
           <div className='item__info'>
            <p>{item.name}</p>
            <p>{item.price}</p>
            </div>
            <ItemQuantity item={item} id={item.id} qty ={item.quantity} price={item.price}/>

           <div className='item__button'>
            <button type='button' onClick={()=>deleteFunction(item,item.id)}>DELETE</button>
           </div>
          </div>

        
        ))
        ):(<div className='empty__cart'>
           <h1>Add items to the cart by clicking on Add to cart button</h1>
        </div>)
      }

      {
        cartData.length ? (
          <div className='total__div'>
          <h1> TOTAL : {total} Rs</h1>
      </div>
        ):("")
      }
        
     
    </div>
  );
}

export default Cart;
