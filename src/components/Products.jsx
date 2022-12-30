import React from "react";

import { CardProducts } from "./CardProducts";
import { Center, Container, Grid, GridItem } from "@chakra-ui/react";
import { getProducts } from "../services/getProducts";

export const Products = () => {
	const productos = getProducts.getSix();
	return (
		<>
			<Center>
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
