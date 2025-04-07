import React from "react";
import Card from "../components/card";
import "./product.css"
const ProductCard = ({ result}) => {
  return (
    <>
    <div className="card-container">
      {result}
    </div>
    </>
  );
};

export default ProductCard;
