import React from 'react'

export default function Carts() {
  return (
    <>
    <h3>Carts</h3>
    <table className='table'>
    <thead>
        <tr>
            <th>Id</th>
            <th>name</th>
            <th>image</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>product 1</td>
            <td><img src="https://i.pravatar.cc?u=5" alt="..." /></td>
            <td>1.000</td>
            <td>10</td>
            <td>10.000</td>
            <td>
                <button className='btn btn-success'>Del</button>
            </td>
        </tr>
    </tbody>
    </table>
    </>
  )
}
