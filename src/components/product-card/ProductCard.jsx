import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="product-item text-center">
        <Link to={`/product-detail/${product.id}`}>
          <img
            style={{ height: 200, margin: "2rem 0", objectFit: "contain" }}
            className="img-fluid"
            src={product.image}
            alt={product.title}
          />
          <h5>{product.title}</h5>
          <p>{product.price} AZN</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
