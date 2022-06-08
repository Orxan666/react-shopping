import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartDetail from '../pages/CartDetail'
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
import ShopProduct from '../pages/ShopProduct'

const BaseRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product-detail/:id" element={<ProductDetail/>}/>
        <Route path="/shop" element={<ShopProduct/>}/>
        <Route path="/cart" element={<CartDetail/>}/>
    </Routes>
  )
}

export default BaseRouter