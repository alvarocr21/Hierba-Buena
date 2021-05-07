import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
import { Cardvendors } from "../../component/Vendors/cardvendors";
import { SearchbarVendors } from "../../component/Vendors/searchbar_vendors";
export const Vendors = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.ApiData("perfil", "GET", "", "perfiles");
	}, []);

	console.log(store.Perfiles);

	return (
		<div>
			<SearchbarVendors />
			<Cardvendors />
			<Cardvendors />
			<Cardvendors />
		</div>
	);
};
