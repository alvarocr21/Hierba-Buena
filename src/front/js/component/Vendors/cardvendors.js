import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
export const Cardvendors = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="card my-2">
				<img
					src="https://www.elmundo.cr/wp-content/uploads/2020/02/2020-01-15-11.39.43-1024x768.jpg"
					className="img-fluid rounded-circle mx-auto d-block w-50 my-3"
				/>
				<div className="card-body text-center">
					<h5 className="card-title">Ricardo Montero</h5>
					<p className="card-text">San Isidro de Heredia</p>
				</div>
			</div>
		</div>
	);
};