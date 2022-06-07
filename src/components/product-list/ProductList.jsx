import React, { useEffect, useState } from 'react'
import shopApi from '../../api/ShopApi'
import ProductCard from '../product-card/ProductCard'

const ProductList = () => {
    const [products, setProducts] = useState([])
    console.log(products)
    const getHandleProducts= async ()=>{
        setProducts(await shopApi.getProducts())
    }
    useEffect(()=>{
        getHandleProducts();
    },[])
  return (
    <section id="product-list">
        <div className="container">
            <div className="product-top">
                <h4>Latest Product</h4>
            </div>
            <div className="row">
                {products?.map(product=>(
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div> 
        </div>
    </section>
  )
}

export default ProductList