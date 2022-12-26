import React, { useState } from "react";
import { ProductsContext } from "./ProductsContext";

export const ProductsProvider = ({ children }) => {
	const [products, setproducts] = useState([]);

	return (
		<ProductsContext.Provider value={{ products, setproducts }}>
			{children}
		</ProductsContext.Provider>
	);
};
