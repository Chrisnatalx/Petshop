import React, { useContext } from "react";
import {
	Box,
	Button,
	Card,
	CardBody,
	CardHeader,
	Heading,
	Image,
	Stack,
	StackDivider,
	Text,
} from "@chakra-ui/react";
import { ProductsContext } from "../context/ProductsContext";

export const Cart = () => {
	const { products } = useContext(ProductsContext);
	console.log(products);
	return (
		<>
			<Card>
				<CardHeader>
					<Heading size="md">Productos</Heading>
				</CardHeader>

				<CardBody>
					<Stack divider={<StackDivider />} spacing="4">
						<Box>
							<Heading size="xs" textTransform="uppercase">
								{products.titulo}
							</Heading>
							<Text pt="2" fontSize="sm">
								${products.precio}
							</Text>
							<Image
								maxH={{ base: "100%", sm: "100px" }}
								maxW={{ base: "100%", sm: "100px" }}
								src={products.url}
								alt={products.titulo}
							/>
							<Text> Cantidad : {products.cant}</Text>
						</Box>
						<Button colorScheme="purple" variant="solid" m={3}>
							Finalizar
						</Button>
					</Stack>
				</CardBody>
			</Card>
		</>
	);
};
