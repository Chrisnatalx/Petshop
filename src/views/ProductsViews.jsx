import React from "react";
import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";
import { Sponsor } from "../components/Sponsor";
export const ProductsViews = () => {
	return (
		<>
			<Navbar />
			<Sponsor />
			<Products />
		</>
	);
};
