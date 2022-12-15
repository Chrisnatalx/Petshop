import { productos } from "../data/productos";

const getAll = () => productos;

const getById = (id) => {
	return productos.find((x) => x.id === id);
};
const getByType = (tipo) => {
	return productos.find((x) => x.tipo === tipo);
};

export const getProducts = {
	getAll,
	getById,
	getByType,
};
