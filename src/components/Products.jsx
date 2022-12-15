import { Center, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { getProducts } from "../services/getProducts";
import { CardProducts } from "./CardProducts";

export const Products = () => {
	const productos = getProducts.getAll();
	return (
		<>
			<Center>
				<Grid templateColumns="repeat(4,1fr)">
					{productos.map((producto) => (
						<Grid key={producto.id}>
							<GridItem>
								<CardProducts {...producto}></CardProducts>
							</GridItem>
						</Grid>
					))}
				</Grid>
			</Center>
		</>
	);
};
