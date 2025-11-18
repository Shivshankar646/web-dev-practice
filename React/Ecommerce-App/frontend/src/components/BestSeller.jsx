import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const BestSeller = () => {
const { products } =useContext(ShopContext);
const [bestSeller,setBestSeller] =useState([]);

useEffect(() =>{
const bestproduct=products.filter((item) =>(item.bestSeller))
},[])
  return (
    <div>
      
    </div>
  )
}

export default BeStseller

