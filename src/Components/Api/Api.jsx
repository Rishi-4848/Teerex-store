


import axios from "axios";


// function to make api request to get the data

export  const fetchData = async ()=>{
  

  try{
    let data = await axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");
    let fetchData = data.data;
     return fetchData
  }catch(err){
    console.log(err)
  }
   
  }
  


