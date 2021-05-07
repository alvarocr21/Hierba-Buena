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
					<img
						src="https://s1.eestatic.com/2020/03/17/ciencia/nutricion/vegetales-transgenicos-tomate_475465019_148545151_1024x576.jpg"
						className="card-img-top rounded-3 "
						alt="..."
					/>
				</div>

				<div className="card-body">
					<h5 className="card-title">El Tomate</h5>
					<p className="card-text">
						Los tomates son ricos en vitamina C, un tomate promedio (120 g) contiene aproximadamente 23 mg.
						de esta vitamina, además están llenos de potasio, fibra y de vitamina A
					</p>
					<h5 className="card-title">Agricultor: Alvaro Solano</h5>
					<img
						src="https://www.ucr.ac.cr/medios/fotos/2019/rs203336_dsc_6793-wed5cdb43692e4dc.jpg"
						className="card-img-top rounded-3"
						alt="..."
					/>
					<p className="card-text">
						Alvaro Solano es un Agricultor de la zona de cartago, posee 50 hectareas de diferentes cultivos
						de productos agropecuarios
					</p>

					<h5 className="card-title">Precio: ¢1500 Kilo</h5>

					<Link to="/BuyProducts">
						<button className="btn btn-success float-right ">Regresar</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
