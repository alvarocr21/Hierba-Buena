import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const CardProducts = props => {
	const { store, actions } = useContext(Context);
	console.log(props.id_porducto);

	return (
		<div>
			<div className="card mb-2">
				<img src={props.fotoProducto} className="card-img-top" alt="..." />

				<div className="card-body">
					<h5 className="card-title">{props.nombreProducto}</h5>

					<Link to="/BuyProducts">
						<a
							className="btn btn-success float-right "
							onClick={() => {
								actions.ObtenerPerfil_Producto(props.id_porducto);
								actions.NombreProducto(props.nombreProducto);
							}}>
							Comprar
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

CardProducts.propTypes = {
	fotoProducto: PropTypes.string,
	nombreProducto: PropTypes.string,
	id_porducto: PropTypes.number
};
