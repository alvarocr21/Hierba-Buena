import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";

export const CreateProfile = () => {
	const { store, actions } = useContext(Context);

	return (
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
							<div className="input-group my-3">
								<div className="input-group-prepend">
									<span className="input-group-text" id="inputGroupFileAddon01">
										Upload
									</span>
								</div>
								<div className="custom-file col-lg-6">
									<input
										type="file"
										className="custom-file-input col-lg-8"
										id="inputGroupFile01"
										aria-describedby="inputGroupFileAddon01"
									/>
									<label className="custom-file-label col-lg-12">Choose file</label>
								</div>
							</div>
							<div className="form-group">
								<label>Example textarea</label>
								<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
							</div>
						</div>

						<Link to="/profile">
							<button type="submit" className="btn">
								Crear Perfil
							</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};
