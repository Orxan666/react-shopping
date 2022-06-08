import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import shopApi from "../api/ShopApi";
import { useDispatchCart } from "../components/cart/Cart";

const ProductDetail = ({ products }) => {
  const dispatch = useDispatchCart();
  const addToCart = (item) => {
    dispatch({type:"ADD",item})
  };
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = useCallback(async () => {
    const response = await shopApi.getProductSingle(id);
    setProduct(response);
  }, [id]);
  console.log(product);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <section>
      <div className="container">
        {product !== null ? (
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="col-lg-4">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <button
                onClick={() => addToCart()}
                className="btn btn-outline-success btn-lg"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ) : (
          <p>loading....</p>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
