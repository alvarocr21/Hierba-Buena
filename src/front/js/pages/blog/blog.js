import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
export const Blog = () => {
	const { store, actions } = useContext(Context);

	return (
		<Carousel className="mx-3 my-3">
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://www.biotropic.com/images/news/2019/beitragsbilder/PPP-CostaRica_1200px.jpg"
					alt="El tomate es la hortaliza más difundida en todo el mundo"
				/>
				<Carousel.Caption>
					<h3>El futuro toca a las puertas de la agricultura</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://www.lateja.cr/resizer/0fNaS7QleEmBP1NS4ltTcBntQbw=/600x0/center/middle/filters:quality(100)/arc-anglerfish-arc2-prod-gruponacion.s3.amazonaws.com/public/WOZTXRYOHZBPZPYQOKPAU7ECHM.JPG"
					alt="Second slide"
				/>
				<Carousel.Caption>
					<h3>Más mercados de cercanía y menos intermediarios</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 mx-5"
					src="https://revistasumma.com/wp-content/uploads/2019/07/agro-1080x675.jpg"
					alt="Third slide"
				/>
				<Carousel.Caption>
					<div className="mx-2 my-2">
						<h3>El tomate es la hortaliza más difundida en todo el mundo</h3>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
