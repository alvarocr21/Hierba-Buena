import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Cardvendors = props => {
	const { store, actions } = useContext(Context);
	console.log(props.FotoPerfil);

	return (
		<div>
			<div className="card my-2">
				<img src={props.FotoPerfil} className="img-fluid rounded-circle large-circle mx-auto d-block my-3" />
				<div className="card-body text-center">
					<h5 className="card-title">{props.NombreVendor}</h5>
					<p className="card-text">
						<i className="fas fa-map-marker-alt"> </i>
						&nbsp; San Isidro de Heredia
					</p>
				</div>
			</div>
		</div>
	);
};

Cardvendors.propTypes = {
	FotoPerfil: PropTypes.string,
	NombreVendor: PropTypes.string
};
