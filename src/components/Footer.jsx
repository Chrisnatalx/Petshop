import React from "react";
import {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	IconButton,
	Link,
} from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
	return (
		<>
			<Card
				bg="#EEEEEE "
				h="100%"
				w="100%"
				fontFamily="Montserrat"
				display="flex"
				justify="center"
				align="center"
				fontSize="2.5rem"
			>
				<CardHeader>
					<ButtonGroup>
						<Link href="https://facebook.com/">
							<IconButton
								colorScheme="black"
								variant="ghost"
								m={5}
								size="lg"
								w="2rem"
								h="1.5rem"
								icon={<FaFacebook />}
							/>
						</Link>

						<Link href="https://github.com/Chrisnatalx">
							<IconButton
								colorScheme="black"
								variant="ghost"
								size="lg"
								w="2rem"
								h="1.5rem"
								m={5}
								aria-label="Search database"
								icon={<FaGithub />}
							/>
						</Link>

						<Link href="https://www.linkedin.com/in/christian-natale-4b54581b8/">
							<IconButton
								colorScheme="black"
								variant="ghost"
								size="lg"
								w="2rem"
								h="1.5rem"
								m={5}
								aria-label="Search database"
								icon={<FaLinkedin />}
							/>
						</Link>

						<Link href="https://twitter.com/home">
							<IconButton
								colorScheme="black"
								variant="ghost"
								w="2rem"
								h="1.5rem"
								size="lg"
								m={5}
								aria-label="Search database"
								icon={<FaTwitter />}
							/>
						</Link>
					</ButtonGroup>
				</CardHeader>

				<CardBody>
					<ButtonGroup bg="#EEEEEE ">
						<Link href="https://vercel.com">
							<Button bg="#EEEEEE " variant="ghost">
								Deploy in
								<TriangleUpIcon m={1} />
								Vercel
							</Button>
						</Link>
					</ButtonGroup>
				</CardBody>
				<CardFooter> © 2022 Copyright: ChakraUi </CardFooter>
			</Card>
		</>
	);
};
