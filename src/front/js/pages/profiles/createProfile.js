import React, { useState, useContext } from "react";

import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";

export const CreateProfile = () => {
	const { store, actions } = useContext(Context);
	const [baseImage, setBaseImage] = useState("");
	const [imgName, setImgName] = useState("Elija la imagen");

	const imgStyle = {
		width: "18rem"
	};

	const uploadImage = async e => {
		const file = e.target.files[0];
		setImgName(file.name);
		console.log(e.target.files[0]);
		const base64 = await convertBase64(file);
		setBaseImage(base64);
		console.log(base64);
	};

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
<<<<<<< HEAD
		<div className="p-4">
			<div>
				<div className="text-center mt-5">
					<form>
						<div className="form-row">
							<div className="form-group col-md-12">
								<label>Nombre Completo</label>
								<input
									type="email"
									className="form-control"
									id="inputEmail"
									placeholder="Ingrese su nombre"
								/>
							</div>
						</div>

						<div className="form-row">
							<div className="form-group col-md-12">
								<label>Correo electrónico</label>
								<input
									type="text"
									className="form-control"
									id="inputCorreo"
									placeholder="Ingrese su correo"
								/>
							</div>
						</div>

						<div className="form-group">
							<label>Teléfono</label>
							<input
								type="text"
								className="form-control"
								id="inputAddress"
								placeholder="Ingrese su telefono"
							/>
						</div>
						<div className="form-group">
							<label>Dirección</label>
							<input
								type="text"
								className="form-control"
								id="inputAddress2"
								placeholder="Ingrese su direccion"
							/>
						</div>
						<div className="form-row">
							<div className="form-group col-md-4">
								<label>Provincia</label>
								<select id="inputState" className="form-control">
									<option selected>Escoger...</option>
									<option>...</option>
								</select>
							</div>
							<div className="form-group col-md-4">
								<label>Cantón</label>
								<select id="inputState" className="form-control">
									<option selected>Escoger...</option>
									<option>...</option>
								</select>
=======
		<div>
			<div className="text-center mt-5">
				<form>
					<div className="row">
						<div className="col">
							<div className="form-row">
								<div className="form-group col-md-6">
									<label>Nombre Completo</label>
									<input type="email" className="form-control" id="inputEmail4" />
								</div>
								<div className="form-group col-md-6">
									<label>Correo electrónico</label>
									<input type="password" className="form-control" id="inputPassword4" />
								</div>
>>>>>>> 838769414fcd5e381e30b71900c32f493a885a76
							</div>
							<div className="form-group">
								<label>Teléfono</label>
								<input type="text" className="form-control" id="inputAddress" placeholder="" />
							</div>
							<div className="form-group">
								<label>Dirección</label>
								<input type="text" className="form-control" id="inputAddress2" placeholder="" />
							</div>
							<div className="form-row">
								<div className="form-group col-md-4">
									<label>Provincia</label>
									<select id="inputState" className="form-control">
										<option selected>Escoger...</option>
										<option>...</option>
									</select>
								</div>
								<div className="form-group col-md-4">
									<label>Cantón</label>
									<select id="inputState" className="form-control">
										<option selected>Escoger...</option>
										<option>...</option>
									</select>
								</div>
								<div className="form-group col-md-4">
									<label>Distrito</label>
									<select id="inputState" className="form-control">
										<option selected>Escoger...</option>
										<option>...</option>
									</select>
								</div>
<<<<<<< HEAD
								<div className="custom-file col-lg-6">
									<input
										type="file"
										className="custom-file-input col-lg-8"
										id="inputGroupFile01"
										aria-describedby="inputGroupFileAddon01"
									/>
									<label className="custom-file-label col-lg-12">Choose file</label>
=======
								<div className="form-group col-md-2">
									<label>Cobertura en km</label>
									<input type="text" className="form-control" id="inputZip" />
>>>>>>> 838769414fcd5e381e30b71900c32f493a885a76
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
								Upload
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
					<div className="form-group">
						<label>Example textarea</label>
						<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
					</div>

<<<<<<< HEAD
						<Link to="/profile">
							<button type="submit" className="btn">
								Crear Perfil
							</button>
						</Link>
					</form>
				</div>
=======
					<Link to="/profile">
						<button type="submit" className="btn btn-primary">
							Crear Perfil
						</button>
					</Link>
				</form>
>>>>>>> 838769414fcd5e381e30b71900c32f493a885a76
			</div>
		</div>
	);
};
