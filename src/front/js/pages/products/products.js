import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
import { CardProducts } from "../../component/Products/CardProducts";
import { SearchProducts } from "../../component/Products/searchProducts";

export const Products = () => {
	const { store, actions } = useContext(Context);
	let password;
	useEffect(() => {
		actions.ApiData("producto", "GET", "", "productos");
	}, []);
	let nombre = store.Productos;

	console.log(nombre);

	return (
		<div>
			<SearchProducts />
			{nombre.map((item, index) => {
				return <CardProducts fotoProducto={item.photo} nombreProducto={item.name} key={index} />;
			})}
			;
		</div>
	);
};
