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

	console.log(store.Productos);

	return (
		<div className="container-fluid">
			<SearchProducts />
			<CardProducts />
			<CardProducts />
			<CardProducts />
		</div>
	);
};
