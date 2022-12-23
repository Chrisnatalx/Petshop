import { Box, Card, Center, Image, Stack } from "@chakra-ui/react";
import React from "react";

export const Sponsor = () => {
	return (
		<>
			<Box>
				<Card w="100%" direction="row" mb={3} justifyContent="space-evenly">
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
					<Image
						boxSize="100px"
						src="https://puppis.vteximg.com.br/arquivos/ids/163028/Royal%20Canin%20150x150.png?v=636613090416470000"
						alt="Royal Canin"
					/>
					<Image
						boxSize="100px"
						src="	https://puppis.vteximg.com.br/arquivos/ids/163030/VitalCan%20150x150.png?v=636613090441530000"
						alt="Vital Can"
					/>
					<Image
						boxSize="100px"
						src="https://puppis.vteximg.com.br/arquivos/ids/163036/Ferplast%20150x150.png?v=636613804106400000"
						alt="Ferplast"
					/>
				</Card>
			</Box>
		</>
	);
};
