import React, { useEffect } from "react";
import { AllProductsLarge } from "./AllProductsLarge";
import { AllProductsResponsive } from "./AllProductsResponsive";
import { useMediaQuery } from "@chakra-ui/react";

export const AllProducts = () => {
	const [isLargerThan550] = useMediaQuery("(min-width: 550px)");

	useEffect(() => {
		if (!isLargerThan550) return;
	}, [isLargerThan550]);

	return (
		<> {isLargerThan550 ? <AllProductsLarge /> : <AllProductsResponsive />}</>
	);
};
