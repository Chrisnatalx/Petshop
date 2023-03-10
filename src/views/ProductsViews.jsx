import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { AllProducts } from "../components/Products/AllProducts";
import { Sponsor } from "../components/Sponsor";

export const ProductsViews = () => {
	return (
		<>
			<Navbar />
			<AllProducts />
			<Sponsor />
			<Footer />
		</>
	);
};
