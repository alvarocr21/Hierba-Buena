import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
import { Cardvendors } from "../../component/Vendors/cardvendors";
import { SearchbarVendors } from "../../component/Vendors/searchbar_vendors";
export const Vendors = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<SearchbarVendors />
			<Cardvendors />
			<Cardvendors />
			<Cardvendors />
		</div>
	);
};
