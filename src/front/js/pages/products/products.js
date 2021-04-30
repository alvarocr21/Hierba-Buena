import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";

export const Products = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="input-group my-3">
				<input
					type="text"
					className="form-control"
					placeholder="Recipient's username"
					aria-label="Recipient's username"
					aria-describedby="button-addon2"
				/>
				<button className="btn btn-success" type="button" id="button-addon2">
					Search
				</button>
			</div>

			<div className="card mb-2">
				<img
					src="https://s1.eestatic.com/2020/03/17/ciencia/nutricion/vegetales-transgenicos-tomate_475465019_148545151_1024x576.jpg"
					className="card-img-top"
					alt="..."
				/>

				<div className="card-body">
					<h5 className="card-title">Tomate</h5>
					<p className="card-text">Tomate Primera Calidad</p>

					<Link to="/BuyProducts">
						<a className="btn btn-success float-right ">Comprar</a>
					</Link>
				</div>
			</div>

			<div className="card mb-2">
				<img
					src="https://www.saborea-madrid.com/wp-content/uploads/2019/03/ChayoteComun-www.mientrastantoenmexico.mx_.jpg"
					className="card-img-top"
					alt="..."
				/>

				<div className="card-body">
					<h5 className="card-title">Chayote</h5>
					<p className="card-text">Chayote Cartago</p>
					<Link to="/BuyProducts">
						<a className="btn btn-success float-right ">Comprar</a>
					</Link>
				</div>
			</div>

			<div className="card mb-2">
				<img
					src="https://www.solucionesparaladiabetes.com/magazine-diabetes/wp-content/uploads/fresas.jpg"
					className="card-img-top"
					alt="..."
				/>

				<div className="card-body">
					<h5 className="card-title">Fresas</h5>
					<p className="card-text">Fresas de las faldas del Volcan Poas</p>
					<Link to="/BuyProducts">
						<a className="btn btn-success float-right ">Comprar</a>
					</Link>
				</div>
			</div>
		</div>
	);
};
