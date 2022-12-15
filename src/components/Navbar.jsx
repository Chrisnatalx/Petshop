import { Search2Icon } from "@chakra-ui/icons";
import {
	Button,
	Menu,
	ButtonGroup,
	IconButton,
	Input,
	Flex,
	Spacer,
	Box,
} from "@chakra-ui/react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import React from "react";

export const Navbar = () => {
	return (
		<Box bg="#FEFAF4 " fontFamily="Montserrat">
			<Flex minWidth="max-content" alignItems="center" gap="2">
				<Menu>
					<ButtonGroup>
						<Button colorScheme="purple" variant="link" m={3}>
							Inicio
						</Button>
						<Button colorScheme="purple" variant="link" m={3}>
							Productos
						</Button>
						<Button colorScheme="purple" variant="link" m={3}>
							Registrarse
						</Button>
					</ButtonGroup>
					<Spacer />
					<ButtonGroup>
						<Input
							focusBorderColor="purple.500"
							m={3}
							variant="flushed"
							placeholder="Que estas buscando?"
						/>
						<IconButton
							colorScheme="purple"
							variant="ghost"
							m={3}
							aria-label="Search database"
							icon={<Search2Icon />}
						/>
						<IconButton
							colorScheme="purple"
							variant="ghost"
							m={3}
							aria-label="Search database"
							icon={<ShoppingCartIcon />}
						/>
					</ButtonGroup>
				</Menu>
			</Flex>
		</Box>
	);
};
