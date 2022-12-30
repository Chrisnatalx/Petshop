import React from "react";
import { getProducts } from "../../services/getProducts";
import { LogicProductsResponsive } from "./LogicProductsResponsive";

export const AllProductsResponsive = () => {
	const productos = getProducts.getAll();

	return <LogicProductsResponsive productos={productos} />;
};
