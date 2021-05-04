import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";

export const BuyProducts = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card-body ">
			<div className="row border border-primary">
				<div className="col border border-secondary">
					<div className="row border border-success">
						<div className="col">
							<img
								src="https://s1.eestatic.com/2020/03/17/ciencia/nutricion/vegetales-transgenicos-tomate_475465019_148545151_1024x576.jpg"
								className="card-img-top rounded-circle"
								alt="..."
							/>
						</div>
					</div>
					<div className="row border border-success">
						<div className="col">Tomate</div>
						<div className="col">Precio</div>
					</div>
					<div className="row border border-success">
						<div className="col"> 2 Kg</div>
						<div className="col">1300</div>
					</div>
				</div>
				<div className="col border border-secondary">
					<div className="row border border-success">
						<div className="col">
							<div className="col">
								<img
									src="https://www.elmundo.cr/wp-content/uploads/2020/02/2020-01-15-11.39.43-1024x768.jpg"
									className="card-img-top rounded-circle"
									alt="..."
								/>
							</div>
						</div>
					</div>
					<div className="row border border-success">
						<div className="col">
							<p className="card-text mb-1">Yarmain Montes</p>
							<p className="card-text">
								<small className="text-muted">Guapiles, Limón</small>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row border border-primary">
				<div className="col border border-secondary">total </div>
				<div className="col border border-secondary">
					<button className="btn btn-primary">Detalle</button>
				</div>
			</div>

			<div className="row border border-primary">
				<div className="col border border-secondary">
					<div className="row">
						<div className="col border border-secondary">
							<button className="btn btn-success">+</button>
						</div>
						<div className="col border border-secondary">
							<button className="btn btn-danger">-</button>
						</div>
					</div>
				</div>
				<div className="col border border-secondary">
					<button className="btn btn-success">Agregar</button>
				</div>
			</div>
		</div>
	);
};
