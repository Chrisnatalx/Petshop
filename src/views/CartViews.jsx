import React from "react";
import { Cart } from "../components/Cart";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CartProducts } from "../components/CartProducts";

export const CartViews = () => {
	return (
		<>
			<Navbar />
			<Cart />
			<Footer />
		</>
	);
};
