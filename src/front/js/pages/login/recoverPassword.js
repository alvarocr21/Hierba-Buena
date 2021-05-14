import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


export const RecoverPassword = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState([]);

	useEffect(() => {
		actions.fetchUsers();
	}, []);

	const notify = (mensaje, estado) => {
		if (estado == "pass") {
			toast.success(mensaje, {
				position: toast.POSITION.TOP_CENTER
			});
		} else if (estado == "fail") {
			toast.error(mensaje, {
				position: toast.POSITION.TOP_LEFT
			});
		} else {
			toast.info(mensaje, {
				position: toast.POSITION.BOTTOM_CENTER
			});
		}
	};

	function sendEmail(e) {
		e.preventDefault();

		store.userList.map((item, index) => {
			if (item.email === email) {
				var length = 8,
					charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
					newVal = "";
				for (var i = 0, n = charset.length; i < length; ++i) {
					newVal += charset.charAt(Math.floor(Math.random() * n));
				}
				var password = newVal;
				var newPassword = "";
				var id = item.id;

				emailjs
					.send(
						"service_mo73zxq",
						"template_recover",
						{ newPassword: password, email: email },
						"user_EHqhSNy90W83VPfCk2Zm2"
					)
					.then(
						result => {
							actions.updatePassword(newVal, id);

							toast.success("Enviamos su nueva contraseña", {
							position: toast.POSITION.TOP_CENTER
							});

						},
						error => {
							console.log(error.text);
						}
					);
			} else {
			}
		});

		e.target.reset();
	}

	return (
		<div className="p-4 container-fluid">
			<form onSubmit={sendEmail}>
				<h3>Recuperar contraseña</h3>

				<div className="form-group">
					<label>
						Ingrese su correo electrónico y le enviaremos instrucciones para cambiar su contraseña:
					</label>
					<input
						name="user_email"
						type="email"
						className="form-control mt-4"
						placeholder="Ingrese su correo electrónico"
						onChange={e => setEmail(e.target.value)}
						value={email}
					/>
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
