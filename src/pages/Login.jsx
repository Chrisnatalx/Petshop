import {
	Box,
	Center,
	Text,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Input,
	Button,
} from "@chakra-ui/react";
import GoogleIcon from "@mui/icons-material/Google";

import React from "react";

export const Login = () => {
	return (
		<>
			<Center>
				<Box m={5}>
					<Card>
						<CardHeader p={3}>
							<Center>
								<Text fontFamily="Roboto">
									Inicia sesion o crear una cuenta nueva
								</Text>
							</Center>
						</CardHeader>
						<CardBody pt={0} pl={3} pb={3} pr={3}>
							<Input mt={3} placeholder="Usuario" />
							<Input mt={3} type="password" placeholder="Contrasena" />
							<Text textAlign="right" fontSize="12px" fontFamily="Roboto">
								Crear cuenta
							</Text>
						</CardBody>
						<CardFooter display="flex" justifyContent="flex-end" p={2}>
							<Button m={1} colorScheme="blue" fontFamily="Roboto">
								Iniciar sesion
							</Button>
							<Button m={1} colorScheme="blue">
								<GoogleIcon />
							</Button>
						</CardFooter>
					</Card>
				</Box>
			</Center>
		</>
	);
};
