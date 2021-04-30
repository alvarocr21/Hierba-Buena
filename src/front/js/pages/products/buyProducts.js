import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";

export const BuyProducts = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card-body ">
			<img
				src="https://s1.eestatic.com/2020/03/17/ciencia/nutricion/vegetales-transgenicos-tomate_475465019_148545151_1024x576.jpg"
				className="card-img-top"
				alt="..."
			/>

			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-success float-right">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
