import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
import { CardProducts } from "../../component/Products/CardProducts";
import { SearchProducts } from "../../component/Products/searchProducts";

export const Products = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<SearchProducts />
			<CardProducts />
			<CardProducts />
			<CardProducts />
		</div>
	);
};
