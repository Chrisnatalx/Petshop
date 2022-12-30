import React from "react";
import { Cart } from "../components/Cart";
import { MoreSales } from "../components/MoreSales";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Products } from "../components/Products";
import { Center, Heading } from "@chakra-ui/react";

export const CartViews = () => {
	return (
		<>
			<Navbar />
			<Cart />
			<Center>
				<Heading pt="50px" color="purple.600">
					Lo mas vendido!!
				</Heading>
			</Center>
			<MoreSales />
			<Footer />
		</>
	);
};
