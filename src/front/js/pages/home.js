import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Accordion from "../component/accordion";
import { Link } from "react-router-dom";
import landingimg1 from "../../img/landingPage/landing 1.jpg";
import logo from "../../img/landingPage/Hierbabuena-verde.png";
import diagramMobile from "../../img/landingPage/diagramMobile.png";
import diagram from "../../img/landingPage/diagram.png";
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
			<div className="text-center container-fluid ">
				<div className="row mobileDiagramDiv">
					<div className="col-7 col-md-3 mr-auto">
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
					</div>
				</div>
				<div className="col diagramDiv">
					<div className="row w-100 mr-auto">
						<img id="diagram" src={diagram} />
					</div>
					<div className="row justify-content-center mb-5">
						<div className="col-md-4 diagramtext3">
							<p id="diagramtext3">... y reciba sus productos frescos! </p>
						</div>
						<div className="col-md-4 diagramtext2">
							<p>
								Ingrese a nuestra{" "}
								<Link to="/Products" className="link">
									{" "}
									<button className="btn btn-success">tienda </button>
								</Link>
							</p>
						</div>
						<div className="col-md-4 diagramtext1">
							<p id="diagramtext1">¡Apoye a sus agricultores locales!</p>
						</div>
					</div>
				</div>
				<Carousel className="mx-3 my-3">
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://www.biotropic.com/images/news/2019/beitragsbilder/PPP-CostaRica_1200px.jpg"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://www.lateja.cr/resizer/0fNaS7QleEmBP1NS4ltTcBntQbw=/600x0/center/middle/filters:quality(100)/arc-anglerfish-arc2-prod-gruponacion.s3.amazonaws.com/public/WOZTXRYOHZBPZPYQOKPAU7ECHM.JPG"
							alt="Second slide"
						/>

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://revistasumma.com/wp-content/uploads/2019/07/agro-1080x675.jpg"
							alt="Third slide"
						/>

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
};
