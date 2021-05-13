import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
import { CardProducts } from "../../component/Products/CardProducts";
import { SearchProducts } from "../../component/Products/searchProducts";

export const Products = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.ApiData("producto", "GET", "", "productos");
	}, []);

	let arrayProducto = [];
	if (store.buscaActiva == true) {
		arrayProducto = store.BuscarProductos;
	} else {
		arrayProducto = store.Productos;
	}

	//console.log(arrayProducto);

	return (
		<div className="container-fluid">
			<SearchProducts />
			{arrayProducto.map((item, index) => {
				return <CardProducts fotoProducto={item.photo} nombreProducto={item.name} key={index} />;
			})}
		</div>
	);
};
