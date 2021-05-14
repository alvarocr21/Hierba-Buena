import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { SubCard } from "./subCard";
export const CardBuyProducts = () => {
	const { store, actions } = useContext(Context);
	const [photoProducto, setPhotoProducto] = useState("");
	const [perfil_prod, setPerfil_Prod] = useState([]);
	const token = localStorage.getItem("jwt-token");
	//console.log(store.id_perfil_producto);

	useEffect(() => {
		cargaPerfil_producto();
	}, []);

	const cargaPerfil_producto = () => {
		let myHeaders = new Headers();
		myHeaders.append("Authorization", "Bearer " + token);
		myHeaders.append("Content-Type", "application/json");

		const requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow"
		};

		fetch("https://hierbabuenacr.herokuapp.com/api/producto/" + store.id_perfil_producto, requestOptions)
			.then(response => response.text())
			.then(result => {
				let dato = JSON.parse(result);
				console.log(dato.Data);
				setPhotoProducto(dato.Data.photo);
				setPerfil_Prod(dato.Data.perfil_producto);
			})
			.catch(error => console.log("error", error));
	};

	return (
		<div>
			{perfil_prod.map((item, index) => {
				return (
					<SubCard
						photoProducto={photoProducto}
						precio={parseFloat(item.price)}
						id_vendor={item.id_perfil}
						key={index}
					/>
				);
			})}
		</div>
	);
};
