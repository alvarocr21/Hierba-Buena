import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
export const Profile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card">
			<img
				src="https://www.elmundo.cr/wp-content/uploads/2020/02/2020-01-15-11.39.43-1024x768.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Los productos producidos en mi finca son 100% organicos</p>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">Nombre</li>
				<li className="list-group-item">correo</li>
				<li className="list-group-item">telefono</li>
				<li className="list-group-item">ubicacion</li>
			</ul>
		</div>
	);
};
