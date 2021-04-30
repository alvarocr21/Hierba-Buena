import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";

export const RecoverPassword = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="p-4">
			<form>
				<h3>Recuperar contraseña</h3>

				<div className="form-group">
					<label>
						Ingrese su correo electrónico y le enviaremos instrucciones para cambiar su contraseña:
					</label>
					<input type="email" className="form-control mt-4" placeholder="Ingrese su correo electrónico" />
				</div>

				<button type="submit" className="btn btn-success btn-block my-3">
					Enviar
				</button>
			</form>
			<div className=" row px-3 py-2">
				<p className="forgot-password mr-auto">
					Regrese a{" "}
					<Link to="/Login" className="link">
						inicio de sesión
					</Link>
				</p>
			</div>
		</div>
	);
};
