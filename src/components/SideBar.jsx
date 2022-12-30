import React, { useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

export const SideBar = () => {
	const [isLargerThan550] = useMediaQuery("(min-width: 550px)");

	useEffect(() => {
		if (!isLargerThan550) return;
	}, [isLargerThan550]);
	return (
		<>
			{isLargerThan550 ? (
				<Box pt="50px">
					<Image
						objectFit="cover"
						w="100%"
						h="400px"
						src="https://storage.googleapis.com/kaggle-competitions/kaggle/17678/logos/header.png?t=2019-11-28-18-44-28"
						alt="Perritos y gatos"
					/>
				</Box>
			) : (
				<Box pt="16px">
					<Image
						objectFit="cover"
						w="100%"
						h="150px"
						src="https://storage.googleapis.com/kaggle-competitions/kaggle/17678/logos/header.png?t=2019-11-28-18-44-28"
						alt="Perritos y gatos"
					/>
				</Box>
			)}
		</>
	);
};
