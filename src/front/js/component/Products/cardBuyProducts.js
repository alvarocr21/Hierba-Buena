import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";

export const CardBuyProducts = () => {
	const { store, actions } = useContext(Context);
	const [contar, setContar] = useState(0);
	const [total, setTotal] = useState(0);
	//setTotal(contar * 1300);

	const totalVenta = () => {
		setTotal(contar * 1300);
	};
	return (
		<div>
			<div className="card-body border border-success mx-1 my-2">
				<div className="row ">
					<div className="col">
						<div className="row ">
							<div className="col d-flex justify-content-center ">
								<img
									src="https://s1.eestatic.com/2020/03/17/ciencia/nutricion/vegetales-transgenicos-tomate_475465019_148545151_1024x576.jpg"
									className="card-img-top rounded-circle small-circle my-3"
									alt="..."
								/>
							</div>
						</div>
						<div className="row ">
							<div className="col d-flex justify-content-start ">Tomate</div>
							<div className="col d-flex justify-content-center "> {contar} Kg</div>
						</div>
						<div className="row ">
							<div className="col d-flex justify-content-start ">Precio</div>
							<div className="col d-flex justify-content-center ">1300</div>
						</div>
					</div>
					<div className="col ">
						<div className="row ">
							<div className="col">
								<div className="col">
									<img
										src="https://www.elmundo.cr/wp-content/uploads/2020/02/2020-01-15-11.39.43-1024x768.jpg"
										className="card-img-top rounded-circle small-circle my-3"
										alt="..."
									/>
								</div>
							</div>
						</div>
						<div className="row ">
							<div className="col">
								<p className="card-text d-flex justify-content-center mb-0">Yarmain Montes</p>
								<p className="card-text d-flex justify-content-center">
									<small className="text-muted">Guapiles, Limón</small>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row  my-2">
					<div className="col  d-flex align-items-center">
						<strong>Total: {store.precioTotal}</strong>
					</div>
					<div className="col  d-flex justify-content-end">
						<Link to="/PerfilProducts">
							<button className="btn btn-success">Detalle</button>
						</Link>
					</div>
				</div>

				<div className="row  mt-4">
					<div className="col ">
						<div className="row ">
							<div className="col  d-flex justify-content-end">
								<button
									className="btn btn-success"
									onClick={() => {
										setContar(contar + 1);
										actions.CalculaPreciototal(contar + 1, 1300);
									}}>
									<i className="fas fa-plus" />
								</button>
							</div>
							<div className="col">
								<button
									className="btn btn-danger"
									onClick={() => {
										setContar(contar - 1);
										actions.CalculaPreciototal(contar - 1, 1300);
									}}>
									<i className="fas fa-minus" />
								</button>
							</div>
						</div>
					</div>
					<div className="col  d-flex justify-content-end">
						<button className="btn btn-success">
							<i className="fas fa-shopping-cart" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
