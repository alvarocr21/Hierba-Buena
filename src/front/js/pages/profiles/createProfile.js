import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";

export const CreateProfile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<form>
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
						<label>Codigo Postal</label>
						<input type="text" className="form-control" id="inputZip" />
					</div>
				</div>
				<button type="submit" className="btn btn-primary">
					Crear Perfil
				</button>
			</form>
		</div>
	);
};
