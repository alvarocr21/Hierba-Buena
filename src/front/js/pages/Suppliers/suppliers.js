import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
export const Suppliers = () => {
	const { store, actions } = useContext(Context);

	return <h1>Desde suppliers</h1>;
};
