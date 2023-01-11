import React from 'react'
import Carts from './Carts'
import ProductItem from './ProductItem'

export default function Products() {
  return (
    <div className='container'>
        <h3>Shoe Shop</h3>
        <Carts />
        <ProductItem />
    </div>
  )
}
