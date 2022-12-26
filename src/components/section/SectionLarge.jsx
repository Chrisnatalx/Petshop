import React from "react";
import { Avatar, AvatarGroup, Center } from "@chakra-ui/react";

export const SectionLarge = () => {
	return (
		<>
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

					<Avatar
						size="2xl"
						name="Juguetes"
						src="https://i.pinimg.com/236x/c0/64/92/c064921cd398b29c073353a7b0427af3--toy-boxes-cardboard-box.jpg"
					/>
					<Avatar
						size="2xl"
						name="Sanitarios"
						src="https://veterinariaaguara.com/wp-content/uploads/2022/04/Como-utilizar-las-piedras-para-gatos.webp"
					/>
				</AvatarGroup>
			</Center>
		</>
	);
};
