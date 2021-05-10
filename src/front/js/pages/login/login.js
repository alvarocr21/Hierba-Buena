import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="p-4">
			<form>
				<h3>Inicio sesión</h3>

				<div className="form-group">
					<label>Correo electrónico</label>
					<input type="email" className="form-control" placeholder="Ingrese su correo electrónico" />
				</div>

				<div className="form-group">
					<label>Contraseña</label>
					<input type="password" className="form-control" placeholder="Ingrese su contraseña" />
				</div>
				<div className="row px-3">
					<div className="form-group">
						<div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="customCheck1" />
							<label className="custom-control-label" htmlFor="customCheck1">
								Recordarme
							</label>
						</div>
					</div>
					<div className="ml-auto">
						{" "}
						<p className="forgot-password mr-auto">
							¿Olvidó su{" "}
							<Link to="/RecoverPassword" className="link">
								contraseña?
							</Link>
						</p>
					</div>
				</div>

				<button type="submit" className="btn btn-success btn-block">
					Iniciar sesión
				</button>
			</form>
			<div className=" row px-4 pt-2">
				<p className="forgot-password mr-auto">
					¿No tiene cuenta?{" "}
					<Link to="/Register" className="link">
						Cree una ahora
					</Link>
				</p>
			</div>
		</div>
	);
};
