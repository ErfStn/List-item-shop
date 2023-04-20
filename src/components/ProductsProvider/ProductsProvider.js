import React, { useContext, useReducer, useState } from "react";
import { productsData } from "../../db/products";
import _ from "lodash";

const ProductContext = React.createContext(); // state
const ProductContextDispatcher = React.createContext(); //setSetate
const initialState = [
	{ title: "HTML", price: "20$", id: 0, quantity: 2 },
	{ title: "CSS", price: "40$", id: 1, quantity: 4 },
	{ title: "Javascript", price: "100$", id: 2, quantity: 2 },
	{ title: "React", price: "150$", id: 3, quantity: 1 },
];
const reducer = (state, action) => {
	switch (action.type) {
		case "increment": {
			const index = state.findIndex(item => item.id === action.id);
			// clone the selected index
			const product = { ...state[index] };
			//add
			product.quantity++;
			// another clone
			const updatedProducts = [...state];
			//avalio mirizim to dovomi
			updatedProducts[index] = product;
			//setState
			return updatedProducts;
		}
		case "decrement": {
			const index = state.findIndex(item => item.id === action.id);
			const product = { ...state[index] };
			if (product.quantity === 1) {
				const selectedItem = state.filter(p => p.id !== action.id);
				return selectedItem;
			} else {
				product.quantity--;
				const updatedProducts = [...state];
				updatedProducts[index] = product;
				return updatedProducts;
			}
		}
		case "remove": {
			const selectedItem = state.filter(p => p.id !== action.id);
			return selectedItem;
		}
		case "edit": {
			const index = state.findIndex(item => item.id === action.id);
			const product = { ...state[index] };
			product.title = action.event.target.value;
			const updatedProducts = [...state];
			updatedProducts[index] = product;
			return updatedProducts;
		}
		case "search": {
			const value = action.event.target.value;
			if (value === "") {
				return state;
			} else {
				const filteredProducts = state.filter(p =>
					p.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
				);
				return filteredProducts;
			}
		}
		case "filter": {
			const value = action.selectedOption.value;
			if (value === "") {
				return productsData;
			} else {
				const filteredProducts = productsData.filter(
					p => p.availableSizes.indexOf(value) >= 0
				);
				return filteredProducts;
			}
		}
		case "sort": {
			const value = action.selectedOption.value;
			const products = [...state];
			if (value === "lowest") {
				return _.orderBy(products, ["price"], ["asc"]);
			} else {
				return _.orderBy(products, ["price"], ["desc"]);
			}
		}

		default:
			return state;
	}
};
const ProductsProvider = ({ children }) => {
	const [products, dispatch] = useReducer(reducer, productsData);

	return (
		<ProductContext.Provider value={products}>
			<ProductContextDispatcher.Provider value={dispatch}>
				{children}
			</ProductContextDispatcher.Provider>
		</ProductContext.Provider>
	);
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductContext);
// ! actions
export const useProductActions = () => {
	return useContext(ProductContextDispatcher);

	//   const products = useProducts();
	//   const setProducts = useContext(ProductContextDispatcher);

	//   const deleteHandler = (id) => {
	//     const selectedItem = products.filter((p) => p.id !== id);
	//     setProducts(selectedItem);
	//   };
	//   const clickIncerement = (id) => {
	//     // id => ok
	//     // index
	//     const index = products.findIndex((item) => item.id === id);
	//     // clone the selected index
	//     const product = { ...products[index] };
	//     //add
	//     product.quantity++;
	//     // another clone
	//     const updatedProducts = [...products];
	//     //avalio mirizim to dovomi
	//     updatedProducts[index] = product;
	//     //setState
	//     setProducts(updatedProducts);
	//   };
	//   const clickDecrement = (id) => {
	//     const index = products.findIndex((item) => item.id === id);
	//     const product = { ...products[index] };
	//     if (product.quantity === 1) {
	//       deleteHandler(index);
	//     } else {
	//       product.quantity--;
	//       const updatedProducts = [...products];
	//       updatedProducts[index] = product;
	//       setProducts(updatedProducts);
	//     }
	//   };
	//   const changeHandler = (event, id) => {
	//     const index = products.findIndex((item) => item.id === id);
	//     const product = { ...products[index] };
	//     product.title = event.target.value;
	//     const updatedProducts = [...products];
	//     updatedProducts[index] = product;
	//     setProducts(updatedProducts);
	//   };
	//   return { deleteHandler, clickIncerement, clickDecrement, changeHandler };
};
