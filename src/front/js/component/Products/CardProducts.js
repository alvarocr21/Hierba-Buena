import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const CardProducts = props => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="card mb-2">
				<img src={props.fotoProducto} className="card-img-top" alt="..." />

				<div className="card-body">
					<h5 className="card-title">{props.nombreProducto}</h5>
					<p className="card-text">Tomate Primera Calidad</p>

					<Link to="/BuyProducts">
						<a className="btn btn-success float-right ">Comprar</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

CardProducts.propTypes = {
	fotoProducto: PropTypes.string,
	nombreProducto: PropTypes.string
};
