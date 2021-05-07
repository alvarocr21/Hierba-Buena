import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
import { CardPerfilProducts } from "../../component/Products/CardPerfilProducts";

export const PerfilProducts = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<CardPerfilProducts />
		</div>
	);
};
