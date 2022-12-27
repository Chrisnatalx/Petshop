import React, { useContext } from "react";
import { Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { ProductsContext } from "../context/ProductsContext";
import { CartProduct } from "./cart/CartProduct";

export const Cart = () => {
	const { products, clearCart } = useContext(ProductsContext);
	console.log(products);
	return (
		<Grid fontFamily="Montserrat" gridTemplateColumns="repeat(2, 1fr)">
			<Grid gridTemplateColumns="repeat(1, 1fr)">
				{products.map((product) => (
					<GridItem key={product.id}>
						<CartProduct {...product} />
					</GridItem>
				))}
			</Grid>

			{products.length > 0 ? (
				<Grid
					fontFamily="Montserrat"
					templateColumns="repeat(auto-fit,minmax(300px,1fr))"
					justifyItems="center"
				>
					<GridItem mt={4}>
						<Text>Total a pagar : ${}</Text>
					</GridItem>
					<GridItem>
						<Button
							width="170px"
							colorScheme="purple"
							variant="solid"
							m={3}
							fontFamily="Montserrat"
							onClick={() => clearCart()}
						>
							Vaciar carrito
						</Button>
						<Button
							width="170px"
							colorScheme="purple"
							variant="solid"
							m={3}
							fontFamily="Montserrat"
						>
							Finalizar Compra
						</Button>
					</GridItem>
				</Grid>
			) : (
				<></>
			)}
		</Grid>
	);
};
