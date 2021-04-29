import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_contactUs.scss";
import { Link } from "react-router-dom";

export const ContactUs = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="p-4">
			<form>
				<h3>Contáctenos</h3>

				<div className="form-group pt-3">
					<input type="email" className="form-control" placeholder="Ingrese su nombre" />
				</div>

				<div className="form-group pb-2">
					<input type="password" className="form-control" placeholder="Ingrese su correo electrónico" />
				</div>

				<div className="form-group">
					<label>Ingrese un comentario</label>
					<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
				</div>

				<button type="submit" className="btn btn-success btn-block">
					Enviar
				</button>
			</form>
			<div className=" row px-4 pt-2">
				<p className="forgot-password mr-auto">
					Volver a la{" "}
					<Link to="/Products" className="link">
						tienda
					</Link>
				</p>
			</div>
		</div>
	);
};
