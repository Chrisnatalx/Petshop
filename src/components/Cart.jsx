import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { CartProduct } from "./cart/CartProduct";
import { CartEnd } from "./cart/CartEnd";
import { Grid, GridItem } from "@chakra-ui/react";

export const Cart = () => {
	const { products } = useContext(ProductsContext);

	return (
		<Grid
			pt="50px"
			fontFamily="Montserrat"
			gridTemplateColumns="repeat(2, 1fr)"
		>
			<Grid gridTemplateColumns="repeat(1, 1fr)">
				{products.map((product) => (
					<GridItem key={product.id}>
						<CartProduct {...product} />
					</GridItem>
				))}
			</Grid>

			{products.length > 0 ? <CartEnd /> : <></>}
		</Grid>
	);
};
