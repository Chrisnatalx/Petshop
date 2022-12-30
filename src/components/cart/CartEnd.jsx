import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import Swal from "sweetalert2";
import { Badge, Button, Grid, GridItem, Link } from "@chakra-ui/react";

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
			templateColumns="repeat(auto-fit,minmax(200px,1fr))"
			justifyItems="center"
		>
			<GridItem>
				<Badge colorScheme="purple">Total a pagar : ${total}</Badge>
			</GridItem>
			<GridItem>
				<Link as={RouterLink} to="/Products" style={{ textDecoration: "none" }}>
					<Button
						width="170px"
						colorScheme="purple"
						variant="solid"
						m={3}
						fontFamily="Montserrat"
					>
						Seguir Comprando
					</Button>
				</Link>
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
