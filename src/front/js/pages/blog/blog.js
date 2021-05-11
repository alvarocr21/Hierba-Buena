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
					<div className="mx-2 my-2">
						<h1>Más mercados de cercanía y menos intermediarios</h1>
						<p>
							El tomate es la hortaliza más difundida en todo el mundo y la de mayor valor económico. Su
							demanda aumenta continuamente y con ella su cultivo, producción y comercio. El incremento
							anual de la producción en los últimos años se debe principalmente al aumento en el
							rendimiento y en menor proporción al aumento de la superficie cultivada. El tomate en fresco
							se consume principalmente en ensaladas, cocido o frito. En mucha menor escala se utiliza
							como encurtido. ¿Qué necesitamos? Semillas: Lo primero que tenemos que hacer es conseguir
							las semillas. En casa, podemos seleccionamos los tomates más maduros, los partimos por la
							mitad y sacamos el jugo con las semillas a un vaso. Lo mantendremos tres días para que
							fermente y poder proceder a su lavado. Los tres días posteriores serán para su secado. El
							Cultivo Lo primero es preparar la maceta. En esta tenemos que echar la tierra con un
							sustrato de calidad hasta la mitad. El pH recomendado gira en torno a 6. También podemos
							mejorarla con materiales orgánicos como el estiércol. Si contamos con tierra arenosa
							utilizaremos fertilizantes para mejorar su calidad. La ubicación será esencial para su
							crecimiento por lo que debemos asegurarnos de que el lugar es cálido y le da la luz.
						</p>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://www.lateja.cr/resizer/0fNaS7QleEmBP1NS4ltTcBntQbw=/600x0/center/middle/filters:quality(100)/arc-anglerfish-arc2-prod-gruponacion.s3.amazonaws.com/public/WOZTXRYOHZBPZPYQOKPAU7ECHM.JPG"
						alt="Second slide"
					/>

					<Carousel.Caption />
					<div className="mx-2 my-2">
						<h1>Más mercados de cercanía y menos intermediarios</h1>

						<p>
							Para el director de la Escuela de Economía Agrícola y Agronegocios de la UCR, Mag. Enrique
							Montenegro Hidalgo, el comercio electrónico es una excelente alternativa para los
							productores agropecuarios, quienes hasta la fecha han estado sujetos a modelos de
							comercialización que les obliga a asumir todos los riesgos de la producción, pero que solo
							les permite obtener, a lo sumo, un 30 % de ganancias sobre el valor del producto. “El COVID
							nos está demostrando que el modelo que teníamos estaba mal y que en realidad tenemos que
							apostar ahora por tener mercados de cercanía, acortar las cadenas de distribución y tener
							menos intermediarios”. “Entre menos eslabones tengamos en la cadena todos se benefician. El
							productor gana más y el consumidor paga menos”, acotó el especialista en economía agrícola.
						</p>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://revistasumma.com/wp-content/uploads/2019/07/agro-1080x675.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption />
					<div className="mx-2 my-2">
						<h1>Más mercados de cercanía y menos intermediarios</h1>

						<p>
							El tomate es la hortaliza más difundida en todo el mundo y la de mayor valor económico. Su
							demanda aumenta continuamente y con ella su cultivo, producción y comercio. El incremento
							anual de la producción en los últimos años se debe principalmente al aumento en el
							rendimiento y en menor proporción al aumento de la superficie cultivada. El tomate en fresco
							se consume principalmente en ensaladas, cocido o frito. En mucha menor escala se utiliza
							como encurtido. ¿Qué necesitamos? Semillas: Lo primero que tenemos que hacer es conseguir
							las semillas. En casa, podemos seleccionamos los tomates más maduros, los partimos por la
							mitad y sacamos el jugo con las semillas a un vaso. Lo mantendremos tres días para que
							fermente y poder proceder a su lavado. Los tres días posteriores serán para su secado. El
							Cultivo Lo primero es preparar la maceta. En esta tenemos que echar la tierra con un
							sustrato de calidad hasta la mitad. El pH recomendado gira en torno a 6. También podemos
							mejorarla con materiales orgánicos como el estiércol. Si contamos con tierra arenosa
							utilizaremos fertilizantes para mejorar su calidad. La ubicación será esencial para su
							crecimiento por lo que debemos asegurarnos de que el lugar es cálido y le da la luz.
						</p>
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};
