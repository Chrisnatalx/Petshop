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
						src="https://st4.depositphotos.com/1606449/20290/i/1600/depositphotos_202902672-stock-photo-cute-dogs-cats-together-hanging.jpg"
						alt="Perritos y gatos"
					/>
				</Box>
			) : (
				<Box pt="16px">
					<Image
						objectFit="cover"
						w="100%"
						h="150px"
						src="https://st4.depositphotos.com/1606449/20290/i/1600/depositphotos_202902672-stock-photo-cute-dogs-cats-together-hanging.jpg"
						alt="Perritos y gatos"
					/>
				</Box>
			)}
		</>
	);
};
