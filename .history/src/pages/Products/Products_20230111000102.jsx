import React from 'react'
import { useSelector } from 'react-redux'
import Carts from './Carts'
import ProductItem from './ProductItem'

export default function Products(props) {
    const {dataProduct} = useSelector(state=> state.shopReducer);


  return (
    <div className='container'>
        <h3>Shoe Shop</h3>
        <Carts />
        <h3 className='mt-2'>Product List</h3>
        
        <div className='row'>
        {dataProduct.map((item, index)=>{
            return  <div className='col-4' key={index}>
            <ProductItem item={item}/>
        </div>
        })}
           
            
            
        </div>
    </div>
  )
}
