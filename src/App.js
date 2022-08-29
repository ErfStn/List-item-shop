import React, { Component, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import "./components/style.css";
import ProductList from "./components/ProductList/productList";
import Wrapper from "./components/hoc/Wrapper";
import ProductsProvider from "./components/ProductsProvider/ProductsProvider";

const App = () => {
  return (
    <>
      <ProductsProvider>
        <NavBar/>
        <ProductList/>
      </ProductsProvider>
    </>
  );
};
export default Wrapper(App, "container");
