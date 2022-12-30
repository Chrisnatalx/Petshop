import React from "react";
import { getProducts } from "../../services/getProducts";

import { CardProducts } from "../CardProducts";
import { Center, Container, Grid, GridItem } from "@chakra-ui/react";

export const ProductsDog = () => {
	const productos = getProducts.getByType("Perro");

	return (
		<>
			<Center pt="50px">
				<Container maxW="container.xl">
					<Grid
						templateColumns="repeat(auto-fit,minmax(330px,1fr))"
						justifyItems="center"
					>
						{productos.map((producto) => (
							<GridItem key={producto.id}>
								<CardProducts {...producto}></CardProducts>
							</GridItem>
						))}
					</Grid>
				</Container>
			</Center>
		</>
	);
};
