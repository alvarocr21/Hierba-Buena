import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";

export const CardPerfilProducts = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="card mb-2">
				<div>
					<img src={store.fotoPro} className="card-img-top rounded-3 " alt="..." />
				</div>

				<div className="card-body">
					<h5 className="card-title">{store.nombpro}</h5>
					<p className="card-text">Descripción del producto</p>
					<h5 className="card-title">Agricultor: {store.nombre}</h5>
					<img src={store.fotoVendor} className="card-img-top rounded-3" alt="..." />
					<p className="card-text">
						{store.nombre} es un Agricultor de la zona de cartago, posee 50 hectareas de diferentes cultivos
						de productos agropecuarios
					</p>

					<h5 className="card-title">Precio: ¢{store.precio} Kilo</h5>

					<Link to="/BuyProducts">
						<button className="btn btn-success float-right ">Regresar</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
