import { Center, Container, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { getProducts } from "../services/getProducts";
import { CardProducts } from "./CardProducts";

export const Products = () => {
	const productos = getProducts.getAll();
	return (
		<>
			<Center>
				<Container maxW="container.xl">
					<Grid
						templateColumns="repeat(auto-fit,minmax(350px,1fr))"
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
