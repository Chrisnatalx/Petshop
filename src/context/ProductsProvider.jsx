import React, { useState } from "react";
import { ProductsContext } from "./ProductsContext";

export const ProductsProvider = ({ children }) => {
	const [products, setproducts] = useState([]);

	const addProducts = (item, newQuantity) => {
		const newProduct = products.filter((prod) => prod.id !== item.id);
		newProduct.push({ ...item, quantity: newQuantity });
		setproducts(newProduct);
	};

	const clearCart = () => {
		setproducts([]);
	};

	const removeProduct = (id) => {
		setproducts(products.filter((product) => product.id !== id));
	};

	return (
		<ProductsContext.Provider
			value={{ products, setproducts, addProducts, removeProduct, clearCart }}
		>
			{children}
		</ProductsContext.Provider>
	);
};
