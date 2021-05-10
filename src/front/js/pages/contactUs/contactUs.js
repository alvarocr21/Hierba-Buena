import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_contactUs.scss";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

export const ContactUs = () => {
	const { store, actions } = useContext(Context);

	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm("service_mo73zxq", "template_contact", e.target, "user_EHqhSNy90W83VPfCk2Zm2").then(
			result => {
				alert("le agradecemos por su mensaje");
			},
			error => {
				console.log(error.text);
			}
		);

		e.target.reset();
	}

	return (
		<div className="p-4">
			<form onSubmit={sendEmail}>
				<h3>Contáctenos</h3>

				<div className="form-group pt-3">
					<input name="user_name" type="text" className="form-control" placeholder="Ingrese su nombre" />
				</div>

				<div className="form-group pb-2">
					<input
						name="user_email"
						type="email"
						className="form-control"
						placeholder="Ingrese su correo electrónico"
					/>
				</div>

				<div className="form-group">
					<label>Ingrese un comentario</label>
					<textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" />
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
