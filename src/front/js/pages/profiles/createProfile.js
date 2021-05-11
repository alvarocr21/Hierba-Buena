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
		<div className="container-fluid">
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
								<div className="form-group col-md-2">
									<label>Cobertura en km</label>
									<input type="text" className="form-control" id="inputZip" />
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

					<Link to="/profile">
						<button type="submit" className="btn btn-primary">
							Crear Perfil
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};
