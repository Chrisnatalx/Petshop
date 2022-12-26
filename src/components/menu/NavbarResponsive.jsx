import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
	Menu,
	IconButton,
	Flex,
	Box,
	Link,
	MenuButton,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const NavbarResponsive = () => {
	return (
		<>
			<Box bg="#FEFAF4" fontFamily="Montserrat">
				<Flex
					minWidth="max-content"
					alignItems="center"
					justifyContent="flex-start"
					gap="2"
				>
					<Menu>
						<MenuButton
							colorScheme="purple"
							as={IconButton}
							aria-label="Options"
							icon={<HamburgerIcon />}
							variant="link"
						/>
						<MenuList>
							<MenuItem>
								<Link as={RouterLink} to="/" colorScheme="purple">
									Inicio
								</Link>
							</MenuItem>
							<MenuItem>
								<Link as={RouterLink} to="/Products" colorScheme="purple">
									Productos
								</Link>
							</MenuItem>
							<MenuItem>
								<Link as={RouterLink} to="/Cart" colorScheme="purple">
									Carrito
								</Link>
							</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</Box>
		</>
	);
};
