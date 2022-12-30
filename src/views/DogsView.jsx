import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ProductsDog } from "../components/Products/ProductsDog";

import { Sponsor } from "../components/Sponsor";

export const DogsView = () => {
	return (
		<>
			<Navbar />
			<ProductsDog />
			<Sponsor />
			<Footer />
		</>
	);
};
