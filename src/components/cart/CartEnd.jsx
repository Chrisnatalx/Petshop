import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import Swal from "sweetalert2";
import { Button, Grid, GridItem, Text } from "@chakra-ui/react";

export const CartEnd = () => {
	const { clearCart, products } = useContext(ProductsContext);

	const total = products.reduce(
		(accum, value) => (accum += value.precio * value.quantity),
		0
	);

	const onAlert = () => {
		clearCart();
		Swal.fire({
			title: "success",
			text: "La compra finalizo con exito!",
			icon: "success",
			confirmButtonText: "Cool",
		});
	};
	return (
		<Grid
			fontFamily="Montserrat"
			templateColumns="repeat(auto-fit,minmax(300px,1fr))"
			justifyItems="center"
		>
			<GridItem mt={4}>
				<Text>Total a pagar : ${total}</Text>
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
					onClick={() => {
						onAlert();
					}}
				>
					Finalizar Compra
				</Button>
			</GridItem>
		</Grid>
	);
};
