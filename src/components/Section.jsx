import React, { useEffect } from "react";

import { useMediaQuery } from "@chakra-ui/react";
import { SectionLarge } from "./section/SectionLarge";
import { SectionResponsive } from "./section/SectionResponsive";

export const Section = () => {
	const [isLargerThan550] = useMediaQuery("(min-width: 550px)");

	useEffect(() => {
		if (!isLargerThan550) return;
	}, [isLargerThan550]);
	return <>{isLargerThan550 ? <SectionLarge /> : <SectionResponsive />}</>;
};
