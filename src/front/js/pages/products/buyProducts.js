import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
import { CardBuyProducts } from "../../component/Products/cardBuyProducts";
import { SearchProducts } from "../../component/Products/searchProducts";

export const BuyProducts = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<SearchProducts />
			<CardBuyProducts />

			<Link to="/Products">
				<button className="btn btn-success float-right ">Regresar</button>
			</Link>
		</div>
	);
};
