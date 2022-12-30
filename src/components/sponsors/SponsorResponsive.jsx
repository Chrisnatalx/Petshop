import React from "react";
import { Box, Card, Image } from "@chakra-ui/react";

export const SponsorResponsive = () => {
	return (
		<Box mt={6}>
			<Card w="100%" direction="row" justifyContent="space-evenly">
				<Image
					boxSize="100px"
					src="https://puppis.vteximg.com.br/arquivos/ids/163027/Pro%20Plan%20150x150.png?v=636613090406530000"
					alt="Purina"
				/>
				<Image
					boxSize="100px"
					src="	https://puppis.vteximg.com.br/arquivos/ids/163020/Eukanuba%20150x150.png?v=636764384009700000"
					alt="Eukanuba"
				/>
			</Card>
		</Box>
	);
};
