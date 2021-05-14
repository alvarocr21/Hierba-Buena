import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import "../../../styles/_home.scss";
import PropTypes from "prop-types";
import { PrecioTotal } from "./precioTotal";
import { SubCardVendor } from "./subCardVendor";
export const SubCard = props => {
	const { store, actions } = useContext(Context);
	const [contar, setContar] = useState(0);

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
				setPerfil(dato.Data.perfil);
				setFoto(dato.Data.foto_perfil);
				cargaUser(dato.Data.id_user);
			})
			.catch(error => console.log("error", error));
	};

	const cargaUser = id_user => {
		let myHeaders = new Headers();
		myHeaders.append("Authorization", "Bearer " + token);
		myHeaders.append("Content-Type", "application/json");

		const requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow"
		};

		fetch("https://hierbabuenacr.herokuapp.com/api/user/" + id_user, requestOptions)
			.then(response => response.text())
			.then(result => {
				let dato = JSON.parse(result);
				setNombre(dato.Data.name);
				setApellido(dato.Data.lastname);
			})
			.catch(error => console.log("error", error));
	};

	return (
		<div className="card-body border border-success mx-1 my-2">
			<div className="row ">
				<div className="col">
					<div className="row ">
						<div className="col d-flex justify-content-center ">
							<img
								src={props.photoProducto}
								className="card-img-top rounded-circle small-circle my-3"
								alt="..."
							/>
						</div>
					</div>
					<div className="row ">
						<div className="col d-flex justify-content-start ">{store.nombpro}</div>
						<div className="col d-flex justify-content-center "> {contar} Kg</div>
					</div>
					<div className="row ">
						<div className="col d-flex justify-content-start ">Precio</div>
						<div className="col d-flex justify-content-center ">₡{props.precio}</div>
					</div>
				</div>
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
			<div className="row  my-2">
				<div className="col  d-flex align-items-center">
					<PrecioTotal cantidad={contar} precio={props.precio} />
				</div>
				<div className="col  d-flex justify-content-end">
					<Link to="/PerfilProducts">
						<button
							className="btn btn-success"
							onClick={() => {
								actions.ActualizaFotos(
									props.photoProducto,
									foto,
									nombre + " " + apellido,
									props.precio
								);
							}}>
							Detalle
						</button>
					</Link>
				</div>
			</div>

			<div className="row  mt-4">
				<div className="col ">
					<div className="row ">
						<div className="col  d-flex justify-content-end">
							<button
								className="btn btn-success"
								onClick={() => {
									setContar(contar + 1);
								}}>
								<i className="fas fa-plus" />
							</button>
						</div>
						<div className="col">
							<button
								className="btn btn-danger"
								onClick={() => {
									if (contar > 0) {
										setContar(contar - 1);
									}
								}}>
								<i className="fas fa-minus" />
							</button>
						</div>
					</div>
				</div>
				<div className="col  d-flex justify-content-end">
					<button
						className="btn btn-success"
						onClick={() => {
							if (contar > 0) {
								actions.AgregaCompra({
									foto: props.photoProducto,
									vendor: foto,
									nombre: nombre + " " + apellido,
									cantidad: contar,
									precio: contar * props.precio
								});
							}
							setContar(0);
						}}>
						<i className="fas fa-shopping-cart" />
					</button>
				</div>
			</div>
		</div>
	);
};

SubCard.propTypes = {
	precio: PropTypes.number,
	photoProducto: PropTypes.string,
	id_vendor: PropTypes.number
};
