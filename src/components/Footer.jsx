import React from "react";
import {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	IconButton,
} from "@chakra-ui/react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { TriangleUpIcon } from "@chakra-ui/icons";

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
				<CardHeader fontSize="2.5rem">
					<ButtonGroup>
						<IconButton
							colorScheme="black"
							variant="ghost"
							size="lg"
							m={3}
							icon={<FacebookIcon />}
						/>
						<IconButton
							colorScheme="black"
							variant="ghost"
							size="lg"
							m={3}
							aria-label="Search database"
							icon={<GitHubIcon />}
						/>
						<IconButton
							colorScheme="black"
							variant="ghost"
							size="lg"
							m={3}
							aria-label="Search database"
							icon={<LinkedInIcon />}
						/>
						<IconButton
							colorScheme="black"
							variant="ghost"
							size="lg"
							m={3}
							aria-label="Search database"
							icon={<TwitterIcon />}
						/>
					</ButtonGroup>
				</CardHeader>

				<CardBody>
					<ButtonGroup bg="#EEEEEE ">
						<Button bg="#EEEEEE " variant="ghost">
							Deploy in
							<TriangleUpIcon m={1} />
							Vercel
						</Button>
					</ButtonGroup>
				</CardBody>
				<CardFooter> © 2022 Copyright: ChakraUi </CardFooter>
			</Card>
		</>
	);
};
