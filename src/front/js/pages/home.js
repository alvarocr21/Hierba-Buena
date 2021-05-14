import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Accordion from "../component/accordion";
import { Link } from "react-router-dom";
import landingimg1 from "../../img/landingPage/landing 1.jpg";
import logo from "../../img/landingPage/Hierbabuena-verde.png";
import diagramMobile from "../../img/landingPage/diagramMobile.png";
import agricultor from "../../img/landingPage/agricultor.png";
import receiving from "../../img/landingPage/receiving.png";
import downArrow from "../../img/landingPage/downArrow.png";
import hierbaTelefono from "../../img/landingPage/hierbaTelefono.png";
import mainDiagram from "../../img/landingPage/mainDiagram.png";
import veggieCar from "../../img/landingPage/veggieCar.png";
import horizontalBackground from "../../img/landingPage/landingHorizontalBackground.jpg";
import "../../styles/_home.scss";
import { Carousel } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div id="frame">
				<img id="myImg" src={logo} />
			</div>
			<div className="text-center container-fluid">
				<div className="col mobileDiagramDiv">
					{/* <div className="col-7 mr-auto p-0">
						<img id="diagramMobile" src={diagramMobile} />
					</div>
					<div className="col-5">
						<div className="diagramtext1">
							<p>¡Apoye a sus agricultores locales!</p>
						</div>
						<div className="diagramtext2">
							<p>
								Ingrese a nuestra{" "}
								<Link to="/Products" className="link">
									{" "}
									<button className="btn btn-success">tienda </button>
								</Link>
							</p>
						</div>
						<div className="diagramtext3">
							<p>... y reciba sus productos frescos! </p>
						</div>
					</div> */}
					<div className="row">
						<div className="col-6 mr-auto">
							<img className="m-auto" id="agricultor" src={agricultor} />
						</div>
						<div className="col-6 ml-auto diagramtext1">
							<p className="m-auto">¡Apoye a sus agricultores locales!</p>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-6 mr-auto">
							<img id="downArrow" src={downArrow} />
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-6 mr-auto">
							<img id="hierbaTelefono" src={hierbaTelefono} />
						</div>
						<div className="col-6 ml-auto diagramtext2">
							<p>
								{" "}
								Ingrese a nuestra{" "}
								<Link to="/Products" className="link">
									{" "}
									<button className="btn btn-success">tienda </button>
								</Link>
							</p>
						</div>
					</div>

					<div className="row mt-3">
						<div className="col-6 mr-auto">
							<img id="downArrow" src={downArrow} />
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-6 mr-auto">
							<img id="receiving" src={receiving} />
						</div>
						<div className="col-6 ml-auto diagramtext3">
							<p className="m-auto">... y reciba sus productos frescos!</p>
						</div>
					</div>
				</div>
				<div className="col diagramDiv">
					<div className="row w-100 mr-auto">
						<img id="diagram" src={mainDiagram} />
					</div>
					<div className="row justify-content-center mb-5">
						<div className="col-md-4 diagramtext3">
							<p id="diagramtext3">... y reciba sus productos frescos! </p>
						</div>
						<div className="col-md-4 diagramtext3">
							<p>Ingrese a nuestra </p>
						</div>
						<div className="col-md-4 diagramtext1">
							<p id="diagramtext1">¡Apoye a sus agricultores locales!</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
