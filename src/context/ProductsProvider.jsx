import React, { useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";

export const ProductsProvider = ({ children }) => {
	const [products, setproducts] = useState(() => {
		try {
			const productosEnLocalStorage = localStorage.getItem("prod");
			return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
		} catch (error) {
			return [];
		}
	});

	const addProducts = (item, newQuantity) => {
		const { quantity = 0 } = products.find((prod) => prod.id === item.id) || {};
		const newProduct = products.filter((prod) => prod.id !== item.id);
		setproducts([...newProduct, { ...item, quantity: quantity + newQuantity }]);
	};

	const clearCart = () => {
		setproducts([]);
	};

	const removeProduct = (id) => {
		setproducts(products.filter((product) => product.id !== id));
	};

	useEffect(() => {
		localStorage.setItem("prod", JSON.stringify(products));
	}, [products]);

	return (
		<ProductsContext.Provider
			value={{ products, setproducts, addProducts, removeProduct, clearCart }}
		>
			{children}
		</ProductsContext.Provider>
	);
};
