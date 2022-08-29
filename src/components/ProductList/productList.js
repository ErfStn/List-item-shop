import React, { Component } from "react";
import Product from "../Products/Products";
import { useProductActions, useProducts } from "../ProductsProvider/ProductsProvider";

const ProductList = () => {
  const products = useProducts();
  const dispatch= useProductActions();
  const renderProduct = () => {
    if (products.length === 0) return <div>there is no product</div>;
    return products.map((product) => {
      return (
        <Product
          product={product}
          key={product.id}
          incerement={() => dispatch({type:"increment",id:product.id})}
          decerement={() => dispatch({type:"decrement",id:product.id})}
          onDelete={() => dispatch({type:"remove",id:product.id})}
          inputChange={(e) => dispatch({type:"edit",id:product.id,event:e})} //=> controlled component
        />
      );
    });
  };
  return (
    <div>
      {!products.length && <div>go to shopping</div> }

      {renderProduct()}
    </div>
  );
};

export default ProductList;
