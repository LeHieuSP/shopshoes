import React from 'react'
import Carts from './Carts'
import ProductItem from './ProductItem'

export default function Products() {
  return (
    <div className='container'>
        <h3>Shoe Shop</h3>
        <Carts />
        <h3 className='mt-2'>Product List</h3>
        <div className='row'>
            <div className='col-4'>
                <ProductItem />
            </div>
            <div className='col-4'>
                <ProductItem />
            </div>
            <div className='col-4'>
                <ProductItem />
            </div>
            
        </div>
    </div>
  )
}
