import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Avatar, ButtonGroup, Center, Link } from "@chakra-ui/react";

export const SectionResponsive = () => {
	return (
		<Center m={3}>
			<ButtonGroup spacing="4rem">
				<Link as={RouterLink} to="/ProductsDogs">
					<Avatar
						size="2xl"
						name="Perros"
						src="https://www.petdarling.com/wp-content/uploads/2014/08/cachorro-beagle-200x200.jpg"
					/>
				</Link>

				<Link as={RouterLink} to="/ProductsCats">
					<Avatar
						size="2xl"
						name="Gatos"
						src="https://www.fundacion-affinity.org/sites/default/files/el-gato-necesita-tener-acceso-al-exterior.jpg"
					/>
				</Link>
			</ButtonGroup>
		</Center>
	);
};
