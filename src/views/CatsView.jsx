import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

import { ProductsCat } from "../components/Products/ProductsCat";
import { Sponsor } from "../components/Sponsor";

export const CatsView = () => {
	return (
		<>
			<Navbar />
			<ProductsCat />
			<Sponsor />
			<Footer />
		</>
	);
};
