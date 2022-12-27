import React from "react";
import { Cart } from "../components/Cart";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const CartViews = () => {
	return (
		<>
			<Navbar />
			<Cart />
			<Footer />
		</>
	);
};
