import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";

import PropTypes from "prop-types";

export const PrecioTotal = props => {
	const { store, actions } = useContext(Context);
	const [buscar, setBuscar] = useState("");

	return (
		<div>
			<strong>Total: ₡{props.cantidad * props.precio}</strong>
		</div>
	);
};

PrecioTotal.propTypes = {
	cantidad: PropTypes.number,
	precio: PropTypes.number
};
