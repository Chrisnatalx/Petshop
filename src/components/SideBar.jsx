import React, { useEffect } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';

export const SideBar = () => {
	const [isLargerThan550] = useMediaQuery('(min-width: 550px)');

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
						src="https://s1.1zoom.me/b5050/855/405025-svetik_1920x1080.jpg"
						alt="Perritos y gatos"
					/>
				</Box>
			) : (
				<Box pt="16px">
					<Image
						objectFit="cover"
						w="100%"
						h="150px"
						src="https://s1.1zoom.me/b5050/855/405025-svetik_1920x1080.jpg"
						alt="Perritos y gatos"
					/>
				</Box>
			)}
		</>
	);
};
