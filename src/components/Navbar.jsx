import React, { useEffect } from "react";

import { useMediaQuery } from "@chakra-ui/react";
import { NavbarResponsive } from "./menu/NavbarResponsive";
import { NavbarLarge } from "./menu/NavbarLarge";

export const Navbar = () => {
	const [isLargerThan550] = useMediaQuery("(min-width: 550px)");

	useEffect(() => {
		if (!isLargerThan550) return;
	}, [isLargerThan550]);

	return <>{isLargerThan550 ? <NavbarLarge /> : <NavbarResponsive />}</>;
};
