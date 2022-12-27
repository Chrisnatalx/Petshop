import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import {
	Box,
	Button,
	Card,
	CardBody,
	Heading,
	Image,
	Stack,
	StackDivider,
	Text,
} from "@chakra-ui/react";

export const CartProduct = ({ titulo, id, precio, quantity, url }) => {
	const { removeProduct } = useContext(ProductsContext);
	return (
		<Card>
			<CardBody>
				<Stack divider={<StackDivider />} spacing="4">
					<Box>
						<Heading size="xs" textTransform="uppercase">
							{titulo}
						</Heading>
						<Text pt="2" fontSize="sm">
							${precio * quantity}
						</Text>
						<Image
							maxH={{ base: "100%", sm: "100px" }}
							maxW={{ base: "100%", sm: "100px" }}
							src={url}
							alt={titulo}
						/>
						<Text> Cantidad : {quantity}</Text>
					</Box>
				</Stack>
				<Button
					colorScheme="purple"
					variant="solid"
					m={3}
					onClick={() => removeProduct(id)}
				>
					Eliminar
				</Button>
			</CardBody>
		</Card>
	);
};
