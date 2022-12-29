import React, { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Center,
	Divider,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";

export const CardProducts = (producto) => {
	const { url, titulo, descripcion, precio } = producto;
	const [counter, setCounter] = useState(0);

	const { addProducts } = useContext(ProductsContext);

	const increment = () => {
		setCounter(counter + 1);
	};
	const decrement = () => {
		counter > 0 ? setCounter(counter - 1) : setCounter(counter);
	};
	const onAddCart = () => {
		if (counter > 0) addProducts(producto, counter);
	};

	return (
		<Card maxW="xs" m={5} fontFamily="Montserrat" h="475px">
			<CardBody>
				<Center>
					<Image
						maxH={{ base: "100%", sm: "200px" }}
						maxW={{ base: "100%", sm: "200px" }}
						src={url}
						alt={titulo}
					/>
				</Center>
				<Stack mt="6" spacing="3">
					<Heading size="md">{titulo}</Heading>
					<Text>{descripcion}</Text>
					<Text color="purple.600" fontSize="2xl">
						${precio}
					</Text>
				</Stack>
			</CardBody>
			<Divider />

			<CardFooter>
				<ButtonGroup spacing="2">
					<Button variant="outline" colorScheme="purple" onClick={decrement}>
						-
					</Button>
					<Text py={2}>{counter}</Text>
					<Button variant="outline" colorScheme="purple" onClick={increment}>
						+
					</Button>
					<Button variant="solid" colorScheme="purple" onClick={onAddCart}>
						Agregar al carrito
					</Button>
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
};
