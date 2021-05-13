import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";

export const SearchProducts = () => {
	const { store, actions } = useContext(Context);
	const [buscar, setBuscar] = useState("");

	return (
		<div>
			<div className="input-group my-3">
				<input
					type="text"
					className="form-control"
					placeholder="Buscar Productos"
					aria-label="Buscar Productos"
					aria-describedby="button-addon2"
					onChange={e => setBuscar(e.target.value)}
				/>
				<button
					className="btn btn-success"
					type="button"
					id="button-addon2"
					onClick={() => {
						actions.BuscarProducto(buscar);
					}}>
					Buscar
				</button>
			</div>
		</div>
	);
};
