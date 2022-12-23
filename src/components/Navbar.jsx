import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import {
	Button,
	Menu,
	ButtonGroup,
	IconButton,
	Input,
	Flex,
	Box,
	Link,
	useMediaQuery,
} from "@chakra-ui/react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

//
export const Navbar = () => {
	const [isLargerThan550] = useMediaQuery("(min-width: 550px)");

	useEffect(() => {
		if (!isLargerThan550) console.log("isLargerThan550");
	}, [isLargerThan550]);

	return (
		<Box bg="#FEFAF4" fontFamily="Montserrat">
			<Flex
				minWidth="max-content"
				alignItems="center"
				justifyContent="space-around"
				gap="2"
			>
				<Menu>
					{isLargerThan550 ? (
						<>
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
								<Link as={RouterLink} to="/Cart">
									<IconButton
										colorScheme="purple"
										variant="ghost"
										m={3}
										aria-label="Search database"
										icon={<ShoppingCartIcon />}
									/>
								</Link>
							</ButtonGroup>
						</>
					) : (
						<h1>Hola</h1>
					)}
				</Menu>
			</Flex>
		</Box>
	);
};
