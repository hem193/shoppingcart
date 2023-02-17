import React from "react";
import "./shop.css";
import { PRODUCTS } from "../../Products";
import { Product } from "./product";
export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>MG Exclusive</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => {
          return <Product data={product} />;
        })}
      </div>
    </div>
  );
};
