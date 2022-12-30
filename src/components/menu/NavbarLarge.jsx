import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import {
	Button,
	Menu,
	ButtonGroup,
	IconButton,
	Flex,
	Box,
	Link,
	Image,
} from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";
import { Logo } from "../Logo/Logo";

export const NavbarLarge = () => {
	const { products } = useContext(ProductsContext);

	return (
		<>
			<Box
				bg="#FEFAF4"
				fontFamily="Montserrat"
				position="fixed"
				zIndex="1001"
				w="100%"
			>
				<Flex
					minWidth="max-content"
					alignItems="center"
					justifyContent="space-around"
					gap="2"
				>
					<Menu>
						<ButtonGroup>
							<Link as={RouterLink} to="/">
								<Logo></Logo>
							</Link>
							<Link
								as={RouterLink}
								to="/Products"
								style={{ textDecoration: "none" }}
							>
								<Button colorScheme="purple" variant="ghost" m={1}>
									Productos
								</Button>
							</Link>
						</ButtonGroup>

						{products.length > 0 ? (
							<ButtonGroup>
								<Link
									as={RouterLink}
									to="/Cart"
									colorScheme="purple"
									variant="ghost"
								>
									<Button
										colorScheme="purple"
										variant="ghost"
										m={0}
										aria-label="Search database"
										leftIcon={<BsFillCartFill />}
									>
										({products.length})
									</Button>
								</Link>
								<Link
									as={RouterLink}
									to="/Cart"
									colorScheme="purple"
									variant="ghost"
								></Link>
							</ButtonGroup>
						) : (
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
						)}
					</Menu>
				</Flex>
			</Box>
		</>
	);
};
