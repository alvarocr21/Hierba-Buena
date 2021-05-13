import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Redirect } from "react-router-dom";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
import { Mapa } from "../../component/Mapa/mapa";
import perfilImg from "../../../img/perfil_default.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from "jwt-decode";

export const CreateProfile = () => {
	const { store, actions } = useContext(Context);
	const [perfil, setPerfil] = useState(false);
	const uri = "https://hierbabuenacr.herokuapp.com/api/";
	const token = localStorage.getItem("jwt-token");
	const decoded = jwt_decode(token);
	const sub = decoded.sub;

	useEffect(() => {
		cargaUser();
	}, []);

	const notify = (mensaje, estado) => {
		if (estado == "pass") {
			toast.success(mensaje, {
				position: toast.POSITION.TOP_CENTER
			});
		} else if (estado == "fail") {
			toast.error(mensaje, {
				position: toast.POSITION.TOP_LEFT
			});
		} else {
			toast.info(mensaje, {
				position: toast.POSITION.BOTTOM_CENTER
			});
		}
	};

	const [imgName, setImgName] = useState("Elija la imagen");
	const [baseImage, setBaseImage] = useState(perfilImg);
	const [nombre, setNombre] = useState("");
	const [apellido, setApellido] = useState("");
	const [email, setEmail] = useState("");
	const [telefono, setTelefono] = useState("");
	const [provincia, setProvincia] = useState("");
	const [canton, setCanton] = useState("");
	const [distrito, setDistrito] = useState("");
	const [direccion, setDireccion] = useState("");
	const [coberturaKm, setCoberturaKm] = useState("");
	const [ubicacionMapa, setUbicacionMapa] = useState("");

	const imgStyle = {
		width: "18rem"
	};

	const cargaUser = () => {
		let myHeaders = new Headers();
		myHeaders.append("Authorization", "Bearer " + token);
		myHeaders.append("Content-Type", "application/json");

		const requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow"
		};

		fetch("https://hierbabuenacr.herokuapp.com/api/user/" + sub, requestOptions)
			.then(response => response.text())
			.then(result => {
				let dato = JSON.parse(result);
				setNombre(dato.Data.name);
				setApellido(dato.Data.lastname);
				setEmail(dato.Data.email);
			})
			.catch(error => console.log("error", error));
	};

	const handleSubmit = e => {
		e.preventDefault();

		let myHeaders = new Headers();
		myHeaders.append("Authorization", "Bearer " + token);
		myHeaders.append("Content-Type", "application/json");

		let raw = JSON.stringify({
			id_provincia: provincia,
			id_canton: canton,
			id_distrito: distrito,
			phone: telefono,
			coberturaKm: coberturaKm,
			foto_perfil: baseImage,
			coordenadas: "coordenadas"
		});

		let requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch(uri + "perfil", requestOptions)
			.then(response => response.text())
			.then(result => {
				console.log(JSON.parse(result));
				let dato = JSON.parse(result);
				console.log(dato.message);
				notify(dato.message, "pass");
				setPerfil(true);
			})
			.catch(error => {
				notify(error, "fail");
				console.log("error", error);
			});
	};

	/*Traerse todos los valore*/
	// let arrayProvincia = store.Provincias;
	// let arrayCanton = arrayProvincia[0];
	// console.log(typeof arrayCanton);
	// arrayProvincia.map((item, index) => {
	// 	const arrayCanton = item.canton;
	// 	arrayCanton.map((item, index) => {
	// 		console.log(item.distrito);
	// 	});
	// });
	// let tempArray = []; //almacena todos los objetos dentro de un arreglo
	// const arrayProvincia = store.Provincias;
	// const arrayCanton = {
	// 	canton: arrayProvincia.canton
	// };
	// tempArray.push(arrayCanton.canton); //mete los objetos dentro del arreglo
	// console.log(arrayProvincia.name);
	// console.log(arrayCanton);
	// console.log(tempArray);

	// tempArray.map((item, index) => {
	// 	console.log(item);
	// });

	/**
	 * Subir imagen y convertir a Base64
	 * @param {*} e
	 */
	const uploadImage = async e => {
		const file = e.target.files[0];
		setImgName(file.name);
		//console.log(e.target.files[0]);
		const base64 = await convertBase64(file);
		setBaseImage(base64);
		//console.log(base64);
	};

	/**
	 * Convierte imagenes a Base64
	 * @param {*} file
	 * @returns
	 */
	const convertBase64 = file => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);

			fileReader.onload = () => {
				resolve(fileReader.result);
			};

			fileReader.onerror = error => {
				reject(error);
			};
		});
	};

	return (
		<div className="container-fluid">
			<div className="text-center mt-5">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col">
							<div className="form-row">
								<div className="form-group col-md-6">
									<label>Nombre</label>
									<input
										type="text"
										className="form-control"
										id="input_nombre"
										value={nombre}
										disabled
									/>
								</div>
								<div className="form-group col-md-6">
									<label>Apellido</label>
									<input
										type="text"
										className="form-control"
										id="input_apellido"
										value={apellido}
										disabled
									/>
								</div>

								<div className="form-group col-md-6">
									<label>Correo electrónico</label>
									<input
										type="text"
										className="form-control"
										id="input_email"
										value={email}
										disabled
									/>
								</div>
								<div className="form-group col-md-6">
									<label>Teléfono</label>
									<input
										type="text"
										className="form-control"
										id="input_telefono"
										placeholder=""
										onChange={e => setTelefono(e.target.value)}
									/>
								</div>
							</div>
							<div className="form-row">
								<div className="form-group col-md-4">
									<label>Provincia</label>
									<select
										name="provincia"
										id="provincia"
										className="form-control"
										onChange={e => setProvincia(e.target.value)}>
										<option value="">Select...</option>
										<option value="1">San Jose</option>
										<option value="2">Alajuela</option>
										<option value="3">Cartago</option>
										<option value="4">Heredia</option>
										<option value="5">Puntarenas</option>
										<option value="6">Guanacaste</option>
										<option value="7">Limón</option>
									</select>
								</div>
								<div className="form-group col-md-4">
									<label>Cantón</label>
									<select
										name="canton"
										id="canton"
										className="form-control"
										onChange={e => setCanton(e.target.value)}>
										<option value="">Select...</option>
										<option value="1">Central</option>
										<option value="2">El Llano</option>
									</select>
								</div>
								<div className="form-group col-md-4">
									<label>Distrito</label>
									<select
										name="distrito"
										id="distrito"
										className="form-control"
										onChange={e => setDistrito(e.target.value)}>
										<option value="">Select...</option>
										<option value="1">Hospital</option>
										<option value="2">Colón</option>
									</select>
								</div>
								<div className="form-group col-12">
									<label>Dirección</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress2"
										placeholder=""
										onChange={e => setDireccion(e.target.value)}
									/>
								</div>
								<div className="form-group col-md-2">
									<label>Cobertura en km</label>
									<input
										type="text"
										className="form-control"
										id="inputZip"
										onChange={e => setCoberturaKm(e.target.value)}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col d-flex justify-content-center">
							<div className="card" style={imgStyle}>
								<img src={baseImage} className="card-img-top" alt="..." />
							</div>
						</div>
					</div>

					<div className="input-group my-3">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroupFileAddon01">
								Subir
							</span>
						</div>
						<div className="custom-file">
							<input
								type="file"
								className="custom-file-input"
								id="inputGroupFile01"
								aria-describedby="inputGroupFileAddon01"
								onChange={e => {
									uploadImage(e);
								}}
							/>
							<label className="custom-file-label d-flex justify-content-start">{imgName}</label>
						</div>
					</div>

					<Mapa />

					<button type="submit" className="btn btn-primary">
						Crear Perfil
					</button>
				</form>
				{perfil ? <Redirect to="/profile" /> : null}
			</div>
		</div>
	);
};
