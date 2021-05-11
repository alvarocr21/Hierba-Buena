import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import { Redirect } from "react-router-dom";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";

export const Register = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState([]);
	const [lastName, setLastName] = useState([]);
	const [email, setEmail] = useState([]);
	const [password, setPassword] = useState([]);
	const [auth, setAuth] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		const body = {
			email: email,
			password: password,
			name: name,
			lastname: lastName
		};
		const uri = "https://hierbabuenacr.herokuapp.com/api/";

		fetch(uri + "user", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				setAuth(resp.ok);
				return resp.json();
			})
			.then(data => alert(data.message))
			.catch(err => console.log(err));
	};

	return (
		<div className="p-4">
			<form onSubmit={handleSubmit}>
				<h3>Registrarse</h3>

				<div className="form-group">
					<label>Nombre</label>
					<input
						onChange={e => setName(e.target.value)}
						type="text"
						className="form-control"
						placeholder="Ingrese su nombre"
					/>
				</div>

				<div className="form-group">
					<label>Apellido</label>
					<input
						onChange={e => setLastName(e.target.value)}
						type="text"
						className="form-control"
						placeholder="Ingrese su apellido"
					/>
				</div>

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
						required="required"
					/>
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
			{auth ? <Redirect to="/Login" /> : null}
		</div>
	);
};
