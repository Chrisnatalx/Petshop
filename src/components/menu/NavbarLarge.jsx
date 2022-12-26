import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
	Button,
	Menu,
	ButtonGroup,
	IconButton,
	Input,
	Flex,
	Box,
	Link,
} from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";
import { Search2Icon } from "@chakra-ui/icons";

export const NavbarLarge = () => {
	return (
		<>
			<Box bg="#FEFAF4" fontFamily="Montserrat">
				<Flex
					minWidth="max-content"
					alignItems="center"
					justifyContent="space-around"
					gap="2"
				>
					<Menu>
						<ButtonGroup>
							<Link as={RouterLink} to="/">
								<Button colorScheme="purple" variant="link" m={3}>
									Inicio
								</Button>
							</Link>
							<Link as={RouterLink} to="/Products">
								<Button colorScheme="purple" variant="link" m={3}>
									Productos
								</Button>
							</Link>
						</ButtonGroup>

						<ButtonGroup>
							<Link as={RouterLink} to="/Cart">
								<IconButton
									colorScheme="purple"
									variant="ghost"
									m={3}
									aria-label="Search database"
									icon={<BsFillCartFill />}
								/>
							</Link>
						</ButtonGroup>
					</Menu>
				</Flex>
			</Box>
		</>
	);
};
