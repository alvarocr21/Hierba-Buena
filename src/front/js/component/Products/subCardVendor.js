import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";

import PropTypes from "prop-types";

export const SubCardVendor = props => {
	const { store, actions } = useContext(Context);
	const [buscar, setBuscar] = useState("");
	const token = localStorage.getItem("jwt-token");
	const [nombre, setNombre] = useState("");
	const [apellido, setApellido] = useState("");
	const [perfil, setPerfil] = useState([]);
	const [foto, setFoto] = useState("");

	useEffect(() => {
		cargaVendor(props.id_vendor);
	}, []);

	const cargaVendor = id => {
		console.log("estoy dentro", id);
		let myHeaders = new Headers();
		myHeaders.append("Authorization", "Bearer " + token);
		myHeaders.append("Content-Type", "application/json");

		const requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow"
		};

		fetch("https://hierbabuenacr.herokuapp.com/api/perfil/" + id, requestOptions)
			.then(response => response.text())
			.then(result => {
				let dato = JSON.parse(result);
				setNombre(dato.Data.name);
				setApellido(dato.Data.lastname);
				//setPerfil(dato.Data.perfil);

				setFoto(dato.Data.foto_perfil);
			})
			.catch(error => console.log("error", error));
	};
	console.log(foto);
	return (
		<div>
			<div className="col ">
				<div className="row ">
					<div className="col">
						<div className="col">
							<img src={foto} className="card-img-top rounded-circle small-circle my-3" alt="..." />
						</div>
					</div>
				</div>
				<div className="row ">
					<div className="col  d-flex justify-content-center">
						<p className="card-text">
							<small className="text-muted">{nombre + " " + apellido}</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

SubCardVendor.propTypes = {
	id_vendor: PropTypes.number
};
