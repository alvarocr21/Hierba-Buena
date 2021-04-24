import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Accordion from "../component/accordion";
import { Link } from "react-router-dom";
import landingimg1 from "../../img/landingPage/landing 1.jpg";
import "../../styles/_home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			<div className="box">
				<img id="landingimg1" src={landingimg1} />
				<Link to="/Products" className="link">
					<button className="btn">Comprar</button>
				</Link>
			</div>
			<Accordion />
		</div>
	);
};
