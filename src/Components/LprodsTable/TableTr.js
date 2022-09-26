import React from 'react'

export const TableTr = ({el}) => {
  
  return (
    <tr>
          <td>
            <button>add</button>
          </td>
          <td>{el.title}</td>
          <td>
            {el.price}
          </td>
          <td>{el.category}</td>
          <td>
            <img src={el.image} alt=""  width="100px"/>
          </td>
        </tr>
  )
}
