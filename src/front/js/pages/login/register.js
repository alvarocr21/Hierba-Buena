import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import { Redirect } from "react-router-dom";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Register = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState([]);
	const [lastName, setLastName] = useState([]);
	const [email, setEmail] = useState([]);
	const [password, setPassword] = useState([]);
	const [confirmPassword, setConfirmPassword] = useState("");
	const [auth, setAuth] = useState(false);

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

	const handleSubmit = e => {
		if (password == confirmPassword) {
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
				.then(data => {
					notify(data.message, "pass");
				})
				.catch(err => {
					notify(err, "fail");
				});
		} else {
			e.preventDefault();
			toast.error("Las contraseñas deben coincidir", {
				position: toast.POSITION.TOP
			});

			setPassword("");
		}
	};

	return (
		<div className="p-4 container-fluid">
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
						required="required"
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
						pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
						title="Su contraseña debe contener al menos un número, una letra mayúscula, una minúscula y al menos 8 caracteres"
					/>
				</div>

				<div className="form-group">
					<label>Confirmar contraseña</label>
					<input
						onChange={e => setConfirmPassword(e.target.value)}
						type="password"
						className="form-control"
						placeholder="Confirme su contraseña"
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
