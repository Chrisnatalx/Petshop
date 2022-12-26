import React, { useEffect } from "react";

import { useMediaQuery } from "@chakra-ui/react";
import { SectionLarge } from "./section/SectionLarge";
import { SectionResponsive } from "./section/SectionResponsive";

export const Section = () => {
	const [isLargerThan900] = useMediaQuery("(min-width: 900px)");

	useEffect(() => {
		if (!isLargerThan900) return;
	}, [isLargerThan900]);
	return <>{isLargerThan900 ? <SectionLarge /> : <SectionResponsive />}</>;
};
