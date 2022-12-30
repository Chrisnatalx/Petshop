import React from "react";
import { Footer } from "../components/Footer";
import { Sponsor } from "../components/Sponsor";
import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";
import { Section } from "../components/Section/";
import { SideBar } from "../components/SideBar";

export const Shop = () => {
	return (
		<>
			<Navbar />
			<SideBar />
			<Section />
			<Products />
			<Sponsor />
			<Footer />
		</>
	);
};
