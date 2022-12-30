import React from "react";
import { getProducts } from "../../services/getProducts";

import { LogicProductsLarge } from "./LogicProductsLarge";

export const AllProductsLarge = () => {
	const productos = getProducts.getAll();

	return <LogicProductsLarge productos={productos} />;
};
