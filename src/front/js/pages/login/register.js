import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";

export const Register = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="p-4">
			<form>
				<h3>Registrarse</h3>

				<div className="form-group">
					<label>Nombre</label>
					<input type="text" className="form-control" placeholder="Ingrese su nombre" />
				</div>

				<div className="form-group">
					<label>Apellido</label>
					<input type="text" className="form-control" placeholder="Ingrese su apellido" />
				</div>

				<div className="form-group">
					<label>Correo electrónico</label>
					<input type="email" className="form-control" placeholder="Ingrese su correo electrónico" />
				</div>

				<div className="form-group">
					<label>Contraseña</label>
					<input type="password" className="form-control" placeholder="Ingrese su contraseña" />
				</div>

				<button type="submit" className="btn btn-success btn-block">
					Registrarse
				</button>
				<p className="forgot-password text-right mt-2 mr-auto">
					¿Ya tiene cuenta?{" "}
					<Link to="/login" className="link">
						Iniciar sesión
					</Link>
				</p>
			</form>
		</div>
	);
};
