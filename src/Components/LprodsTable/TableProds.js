import React from 'react'
import './table.css'
import { TableTr } from './TableTr';
const TableProds = ({produits}) => {
  return (
  
 <div>
  <h2>Products</h2>
  <div className="table-wrapper">
    <table className="fl-table">
      <thead>
        <tr>
          <th>*</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category </th>
          <th>Product Photo</th>
        </tr>
      </thead>
      <tbody>
       {
        produits.map(el=><TableTr key={el.id} el={el} /> )
       }
       
      </tbody><tbody>
      </tbody></table>
  </div>
</div>


  )
}
export default TableProds