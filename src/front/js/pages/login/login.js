import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState([]);
	const [password, setPassword] = useState([]);
	const [auth, setAuth] = useState(false);
	//const[mensaje,setMensaje] = useState("");

	const notify = (mensaje, estado) => {
		//toast(mensaje,{position: toast.POSITION.BOTTOM_CENTER})
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

	const handleSubmit = e => {
		e.preventDefault();
		const body = {
			email: email,
			password: password
		};
		let cuerpo = JSON.stringify(body);

		actions.ApiData("user", "GET", "", "users");
actions.ApiData("login", "POST", cuerpo, "login");

		// const uri = "https://hierbabuenacr.herokuapp.com/api/";
		// fetch(uri + "login", {
		// 	method: "POST",
		// 	body: JSON.stringify(body),
		// 	headers: {
		// 		"Content-Type": "application/json"
		// 	}
		// })
		// 	.then(resp => {
		// 		setAuth(resp.ok);
		// 		actions.login(resp.ok);
		// 		return resp.json();
		// 	})
		// 	.then(data => {
		// 		notify(data.message.message, "pass");
		// 	})
		// 	.catch(err => {
		// 		notify("Las credenciales son incorrectas", "fail");
		// 	});
	};

	console.log(store.mensaje);

	return (
		<div className="p-4 container-fluid">
			<form onSubmit={handleSubmit}>
				<h3>Inicio sesión</h3>

				<div className="form-group">
					<label>Correo electrónico</label>
					<input
						onChange={e => setEmail(e.target.value)}
						type="email"
						className="form-control"
						placeholder="Ingrese su correo electrónico"
					/>
				</div>

				<div className="form-group">
					<label>Contraseña</label>
					<input
						onChange={e => setPassword(e.target.value)}
						type="password"
						className="form-control"
						placeholder="Ingrese su contraseña"
					/>
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
			{auth ? <Redirect to="/Products" /> : null}
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
