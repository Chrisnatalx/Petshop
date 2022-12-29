import React, { useEffect } from "react";

import { useMediaQuery } from "@chakra-ui/react";
import { SponsorLarge } from "./sponsors/SponsorLarge";
import { SponsorResponsive } from "./sponsors/SponsorResponsive";
export const Sponsor = () => {
	const [isLargerThan550] = useMediaQuery("(min-width: 550px)");
	useEffect(() => {
		if (!isLargerThan550) return;
	}, [isLargerThan550]);
	return <>{isLargerThan550 ? <SponsorLarge /> : <SponsorResponsive />}</>;
};
