import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
import { Cardvendors } from "../../component/Vendors/cardvendors";
import { SearchbarVendors } from "../../component/Vendors/searchbar_vendors";

export const Vendors = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.ApiData("user", "GET", "", "users");
    }, []);
    
    let arrayUsers = store.Users;

	console.log(store.Users);

	return (
		<div className="container-fluid">
			<SearchbarVendors />
			<Cardvendors />
			<Cardvendors />
			<Cardvendors />
            {arrayUsers.map((item, index) => {
				return <Cardvendors fotoProducto={item.photo} nombreProducto={item.name} key={index} />;
			})}
		</div>
	);
};
