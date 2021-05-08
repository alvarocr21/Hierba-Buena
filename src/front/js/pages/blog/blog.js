import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/_home.scss";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
export const Blog = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Carousel className="mx-3 my-3">
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://www.biotropic.com/images/news/2019/beitragsbilder/PPP-CostaRica_1200px.jpg"
						alt="El tomate es la hortaliza más difundida en todo el mundo"
					/>
					<Carousel.Caption />
					<p>
						El tomate es la hortaliza más difundida en todo el mundo y la de mayor valor económico. Su
						demanda aumenta continuamente y con ella su cultivo, producción y comercio. El incremento anual
						de la producción en los últimos años se debe principalmente al aumento en el rendimiento y en
						menor proporción al aumento de la superficie cultivada. El tomate en fresco se consume
						principalmente en ensaladas, cocido o frito. En mucha menor escala se utiliza como encurtido.
						¿Qué necesitamos? Semillas: Lo primero que tenemos que hacer es conseguir las semillas. En casa,
						podemos seleccionamos los tomates más maduros, los partimos por la mitad y sacamos el jugo con
						las semillas a un vaso. Lo mantendremos tres días para que fermente y poder proceder a su
						lavado. Los tres días posteriores serán para su secado. El Cultivo Lo primero es preparar la
						maceta. En esta tenemos que echar la tierra con un sustrato de calidad hasta la mitad. El pH
						recomendado gira en torno a 6. También podemos mejorarla con materiales orgánicos como el
						estiércol. Si contamos con tierra arenosa utilizaremos fertilizantes para mejorar su calidad. La
						ubicación será esencial para su crecimiento por lo que debemos asegurarnos de que el lugar es
						cálido y le da la luz.
					</p>
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
	);
};
