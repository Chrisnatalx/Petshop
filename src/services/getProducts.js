import { productos } from "../data/productos";

const getAll = () => productos;

const getSix = () => productos.filter((x) => x.id < 7);

const getById = (id) => {
	return productos.find((x) => x.id === id);
};
const getByType = (tipo) => {
	return productos.filter((x) => x.tipo === tipo);
};
const getByVenta = (venta) => {
	return productos.filter((x) => x.venta === venta);
};

export const getProducts = {
	getAll,
	getSix,
	getById,
	getByType,
	getByVenta,
};
