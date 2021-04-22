import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";

export const PerfilProducts = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="card mb-2">
				<img
					src="https://s1.eestatic.com/2020/03/17/ciencia/nutricion/vegetales-transgenicos-tomate_475465019_148545151_1024x576.jpg"
					className="card-img-top"
					alt="..."
				/>

				<div className="card-body">
					<h5 className="card-title">Agricultor</h5>
					<p className="card-text">Tomate Primera Calidad</p>

					<a href="#" className="btn btn-success float-right ">
						Comprar
					</a>
				</div>
			</div>
		</div>
	);
};
