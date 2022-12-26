import { Avatar, AvatarGroup, Center } from "@chakra-ui/react";
import React from "react";

export const SectionResponsive = () => {
	return (
		<Center mb={3}>
			<AvatarGroup spacing="4rem">
				<Avatar
					size="2xl"
					name="Perros"
					src="https://www.petdarling.com/wp-content/uploads/2014/08/cachorro-beagle-200x200.jpg"
				/>

				<Avatar
					size="2xl"
					name="Gatos"
					src="https://www.fundacion-affinity.org/sites/default/files/el-gato-necesita-tener-acceso-al-exterior.jpg"
				/>
			</AvatarGroup>
		</Center>
	);
};
