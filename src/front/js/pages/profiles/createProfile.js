import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
import { Mapa } from "../../component/Mapa/mapa";
import perfilImg from "../../../img/perfil_default.jpg";

export const CreateProfile = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.ApiData("provincia/1", "GET", "", "provincias", { "Content-Type": "application/json" });
	}, []);

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
	let tempArray = []; //almacena todos los objetos dentro de un arreglo
	const arrayProvincia = store.Provincias;
	const arrayCanton = {
		canton: arrayProvincia.canton
	};
	tempArray.push(arrayCanton.canton); //mete los objetos dentro del arreglo
	console.log(arrayProvincia.name);
	console.log(arrayCanton);
	console.log(tempArray);

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
		<div>
			<div className="text-center mt-5">
				<form>
					<div className="row">
						<div className="col">
							<div className="form-row">
								<div className="form-group col-md-6">
									<label>Nombre</label>
									<input
										type="text"
										className="form-control"
										id="input_nombre"
										onChange={e => setNombre(e.target.value)}
										value={nombre}
									/>
								</div>
								<div className="form-group col-md-6">
									<label>Apellido</label>
									<input
										type="text"
										className="form-control"
										id="input_apellido"
										onChange={e => setApellido(e.target.value)}
										value={apellido}
									/>
								</div>

								<div className="form-group col-md-6">
									<label>Correo electrónico</label>
									<input
										type="text"
										className="form-control"
										id="input_email"
										onChange={e => setEmail(e.target.value)}
										value={email}
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
										value={telefono}
									/>
								</div>
							</div>
							<div className="form-row">
								<div className="form-group col-md-4">
									<label>Provincia</label>
									<select name="provincia" id="provincia" className="form-control">
										<option value="1">San Jose</option>
									</select>
								</div>
								<div className="form-group col-md-4">
									<label>Cantón</label>
									<select name="canton" id="canton" className="form-control">
										<option value="1">Central</option>
									</select>
								</div>
								<div className="form-group col-md-4">
									<label>Distrito</label>
									<select name="distrito" id="distrito" className="form-control">
										<option value="1">Hospital</option>
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
										value={direccion}
									/>
								</div>
								<div className="form-group col-md-2">
									<label>Cobertura en km</label>
									<input
										type="text"
										className="form-control"
										id="inputZip"
										onChange={e => setCoberturaKm(e.target.value)}
										value={coberturaKm}
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
				</form>
				<Mapa />
				<Link to="/profile">
					<button type="submit" className="btn btn-primary">
						Crear Perfil
					</button>
				</Link>
			</div>
		</div>
	);
};
