import React, { useState } from 'react'
import Header from './Header'



const Home = () => {


  const [count,setcount]=useState([
    {
      id:1,
      name:"20% Discount on Selected items",
      status:false,
    },
    
    {
      id:2,
      name:"Free Shipping delivery all orders.",
      status:false,
    },
    
    {
      id:3,
      name:"No Minimum Purchase ",
      status:false,
    },
    
    
    ]);


  return (
    <div>
  <Header  count={count} />
    </div>
  )
}

export default Home