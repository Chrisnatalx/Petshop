import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProductsProvider } from "../context/ProductsProvider";
import { CartViews } from "../views/CartViews";
import { CatsView } from "../views/CatsView";
import { DogsView } from "../views/DogsView";
import { ProductsViews } from "../views/ProductsViews";
import { Shop } from "../views/Shop";

export const AppRouter = () => {
	return (
		<ProductsProvider>
			<Routes>
				<Route path="/" element={<Shop />} />
				<Route path="/Products" element={<ProductsViews />} />
				<Route path="/ProductsDogs" element={<DogsView />} />
				<Route path="/ProductsCats" element={<CatsView />} />
				<Route path="/Cart" element={<CartViews />} />
			</Routes>
		</ProductsProvider>
	);
};
