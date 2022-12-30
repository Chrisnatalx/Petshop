import React from "react";
import { Center, Container, Grid, GridItem } from "@chakra-ui/react";
import { getProducts } from "../services/getProducts";
import { CardProducts } from "./CardProducts";

export const MoreSales = () => {
	const productos = getProducts.getByVenta("Alta");
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
