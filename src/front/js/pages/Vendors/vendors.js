import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
export const Vendors = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="card my-2">
				<img
					src="https://www.elmundo.cr/wp-content/uploads/2020/02/2020-01-15-11.39.43-1024x768.jpg"
					className="img-fluid rounded-circle mx-auto d-block w-50 my-3"
				/>
				<div className="card-body text-center">
					<h5 className="card-title">Ricardo Montero</h5>
					<p className="card-text">San Isidro de Heredia</p>
				</div>
			</div>

			<div className="card my-2">
				<img
					src="https://semanariouniversidad.com/wp-content/uploads/Jes%C3%BAs-2.jpg"
					className="img-fluid rounded-circle mx-auto d-block w-50 my-3"
				/>
				<div className="card-body text-center">
					<h5 className="card-title">Carlos Murillo</h5>
					<p className="card-text">Perez Zeledon</p>
				</div>
			</div>

			<div className="card my-2">
				<img
					src="https://i.ytimg.com/vi/Q5QQti89TAU/maxresdefault.jpg"
					className="img-fluid rounded-circle mx-auto d-block w-50 my-3"
				/>
				<div className="card-body text-center">
					<h5 className="card-title">Alberto Rodriguez</h5>
					<p className="card-text">Liberia Guanacaste</p>
				</div>
			</div>

			<div className="card my-2">
				<img
					src="https://ep01.epimg.net/elpais/imagenes/2016/03/28/planeta_futuro/1459170540_908178_1459171192_noticia_normal_recorte1.jpg"
					className="img-fluid rounded-circle mx-auto d-block w-50 my-3"
				/>
				<div className="card-body text-center">
					<h5 className="card-title">Roberto Morales</h5>
					<p className="card-text">Turrialba</p>
				</div>
			</div>
		</div>
	);
};
