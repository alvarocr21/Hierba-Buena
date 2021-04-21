import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import landingimg1 from "../../img/landingPage/landing 1.jpg";
import "../../styles/_home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			<div className="box">
				<img id="landingimg1" src={landingimg1} />
				<button className="btn">Comprar</button>
			</div>
		</div>
	);
};
