import React from 'react'
import { useCart } from '../components/cart/Cart'
const CartItem = ({product,index,handleRemove}) => {
  return (
    <div>
        <img src={product.image} alt="" />
        <h1>{product.title}</h1>
    </div>
  )
}

export default CartItem