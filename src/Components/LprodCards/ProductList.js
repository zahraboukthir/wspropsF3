import React from 'react'
import { ProductCard } from './ProductCard'

const ProductList = ({produits}) => {
    // console.log(produits)
  return (
    <div style={{
        display:"flex",justifyContent:"space-around", flexWrap:"wrap",
        

    }}>
      {
        produits.map(
            (prod,i)=><ProductCard key={i} prodprops={prod}/>
        )
      }  
    </div>
  )
}

export default ProductList