import { Center, Container, Grid, GridItem } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { Cart } from "./Cart";

export const CartProducts = () => {
	const { products, setproducts } = useContext(ProductsContext);

	return (
		<>
			<Center>
				<Container maxW="container.xl">
					<Grid
						templateColumns="repeat(auto-fit,minmax(350px,1fr))"
						justifyItems="center"
					>
						{products.map((product) => (
							<GridItem key={product.id}>
								<Cart {...product}></Cart>
							</GridItem>
						))}
					</Grid>
				</Container>
			</Center>
		</>
	);
};
