import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react'


export const ProductContext = createContext();


export const ProductProvider = props => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:5500/src/data/Product.json')
      .then(res => setProduct(res.data))
  }, [])

   

  return (
    <ProductContext.Provider value={[product, setProduct]} >
 

      {props.children}

    </ProductContext.Provider>
  )
}

export default ProductContext