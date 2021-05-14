import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
import { Cardvendors } from "../../component/Vendors/cardvendors";
import { SearchbarVendors } from "../../component/Vendors/searchbar_vendors";

export const Vendors = () => {
	const { store, actions } = useContext(Context);
	const token = localStorage.getItem("jwt-token");
	//const [arrayUsers, setArrayUsers] = useState([]);

	useEffect(() => {
		cargaUser();
	}, []);

	const cargaUser = () => {
		let myHeaders = new Headers();
		myHeaders.append("Authorization", "Bearer " + token);
		myHeaders.append("Content-Type", "application/json");

		const requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow"
		};

		fetch("https://hierbabuenacr.herokuapp.com/api/user", requestOptions)
			.then(response => response.text())
			.then(result => {
				let dato = JSON.parse(result);

				actions.ArrayUsers(dato.Data);

				//let arrayUsers = store.Users;
			})
			.catch(error => console.log("error", error));
	};

	let arrayVendor = [];
	if (store.buscaPerfilActiva == true) {
		arrayVendor = store.BuscarPerfiles;
	} else {
		arrayVendor = store.Perfiles;
	}

	return (
		<div className="container-fluid">
			<SearchbarVendors />

			{arrayVendor.map((item, index) => {
				console.log(item.perfil);
				let foto = "";
				item.perfil.map((item2, index2) => {
					foto = item2.foto_perfil;
				});
				return <Cardvendors FotoPerfil={foto} NombreVendor={item.name + " " + item.lastname} key={index} />;
			})}
		</div>
	);
};
