import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";

export const BuyProducts = () => {
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

			<div className="card-body border border-success mx-1 my-2">
				<div className="row ">
					<div className="col">
						<div className="row ">
							<div className="col">
								<img
									src="https://s1.eestatic.com/2020/03/17/ciencia/nutricion/vegetales-transgenicos-tomate_475465019_148545151_1024x576.jpg"
									className="card-img-top rounded-circle my-3"
									alt="..."
								/>
							</div>
						</div>
						<div className="row ">
							<div className="col d-flex justify-content-center">Tomate</div>
							<div className="col d-flex justify-content-center">Precio</div>
						</div>
						<div className="row ">
							<div className="col d-flex justify-content-center"> 2 Kg</div>
							<div className="col d-flex justify-content-center">1300</div>
						</div>
					</div>
					<div className="col ">
						<div className="row ">
							<div className="col">
								<div className="col">
									<img
										src="https://www.elmundo.cr/wp-content/uploads/2020/02/2020-01-15-11.39.43-1024x768.jpg"
										className="card-img-top rounded-circle my-3"
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
						<strong>Total: 2600</strong>
					</div>
					<div className="col  d-flex justify-content-end">
						<Link to="/PerfilProducts">
							<button className="btn btn-primary ">Detalle</button>
						</Link>
					</div>
				</div>

				<div className="row  mt-4">
					<div className="col ">
						<div className="row ">
							<div className="col  d-flex justify-content-end">
								<button className="btn btn-success">
									<i className="fas fa-plus" />
								</button>
							</div>
							<div className="col">
								<button className="btn btn-danger">
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

			<div className="card-body border border-success mx-1 my-2">
				<div className="row ">
					<div className="col">
						<div className="row ">
							<div className="col">
								<img
									src="https://s1.eestatic.com/2020/03/17/ciencia/nutricion/vegetales-transgenicos-tomate_475465019_148545151_1024x576.jpg"
									className="card-img-top rounded-circle my-3"
									alt="..."
								/>
							</div>
						</div>
						<div className="row ">
							<div className="col d-flex justify-content-center">Tomate</div>
							<div className="col d-flex justify-content-center">Precio</div>
						</div>
						<div className="row ">
							<div className="col d-flex justify-content-center"> 2 Kg</div>
							<div className="col d-flex justify-content-center">1300</div>
						</div>
					</div>
					<div className="col ">
						<div className="row ">
							<div className="col">
								<div className="col">
									<img
										src="https://www.elmundo.cr/wp-content/uploads/2020/02/2020-01-15-11.39.43-1024x768.jpg"
										className="card-img-top rounded-circle my-3"
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
						<strong>Total: 2600</strong>
					</div>
					<div className="col  d-flex justify-content-end">
						<Link to="/PerfilProducts">
							<button className="btn btn-primary ">Detalle</button>
						</Link>
					</div>
				</div>

				<div className="row  mt-4">
					<div className="col ">
						<div className="row ">
							<div className="col  d-flex justify-content-end">
								<button className="btn btn-success">
									<i className="fas fa-plus" />
								</button>
							</div>
							<div className="col">
								<button className="btn btn-danger">
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
			<Link to="/Products">
				<button className="btn btn-success float-right ">Regresar</button>
			</Link>
		</div>
	);
};
