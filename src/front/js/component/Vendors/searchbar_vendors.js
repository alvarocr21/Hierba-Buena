import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
export const SearchbarVendors = () => {
	const { store, actions } = useContext(Context);
	const [buscar, setBuscar] = useState("");
	return (
		<div>
			<div className="input-group my-3">
				<input
					type="text"
					className="form-control"
					placeholder="Recipient's username"
					aria-label="Recipient's username"
					aria-describedby="button-addon2"
					onChange={e => setBuscar(e.target.value)}
				/>
				<button
					className="btn btn-success"
					type="button"
					id="button-addon2"
					onClick={() => {
						actions.BuscarVendor(buscar);
					}}>
					Search
				</button>
			</div>
		</div>
	);
};
