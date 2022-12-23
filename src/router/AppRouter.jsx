import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartViews } from "../views/CartViews";
import { ProductsViews } from "../views/ProductsViews";
import { Shop } from "../views/Shop";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Shop />} />
			<Route path="/Products" element={<ProductsViews />} />
			<Route path="/Cart" element={<CartViews />} />
		</Routes>
	);
};
