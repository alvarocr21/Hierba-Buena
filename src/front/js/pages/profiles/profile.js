import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
export const Profile = () => {
	const { store, actions } = useContext(Context);
	console.log(JSON.stringify(store.perfil));
	const perfil = JSON.parse(JSON.stringify(store.perfil));
	console.log(perfil.nombre);
	return (
		<div className="container-fluid">
			<div className="card mt-2">
				<img src={perfil.foto} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{perfil.nombre}</h5>
					<p className="card-text">Los productos producidos en mi finca son 100% orgánicos</p>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Email: {perfil.correo}</li>
					<li className="list-group-item">Telefono: {perfil.telefono}</li>
					<li className="list-group-item">Cobertura: {perfil.cobertura} Km</li>
				</ul>
				<div className="row">
					<div className="col d-flex justify-content-center my-2">
						<Link to="/">
							<button type="submit" className="btn btn-success">
								Inicio
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
