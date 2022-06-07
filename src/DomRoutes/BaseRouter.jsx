import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
import ShopProduct from '../pages/ShopProduct'

const BaseRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product-detail/:id" element={<ProductDetail/>}/>
        <Route path="/shop" element={<ShopProduct/>}/>
    </Routes>
  )
}

export default BaseRouter