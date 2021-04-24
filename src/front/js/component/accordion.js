import React, { Component } from "react";

class Accordion extends Component {
	state = {
		opened: false
	};

	render() {
		const {
			state: { opened }
		} = this;
		const onClick = () => {
			this.setState({ opened: !opened });
		};
		const className = `accordion-item ${opened && "accordion-item--opened"}`;
		return (
			<div className={className} onClick={onClick}>
				<div className="accordion-item__line">
					<h3 className="accordion-item__title">De la tierra a su plato...</h3>
					<span className="accordion-item__icon" />
				</div>
				<div className="accordion-item__inner">
					<div className="accordion-item__content p-4">
						<p className="accordion-item__paragraph">
							La oportunidad de comprar alimentos cultivados localmente es invaluable a medida que aumenta
							la demanda. Los consumidores se benefician de opciones de alimentos más saludables, y los
							agricultores se benefician de nuevas oportunidades para vender sus cultivos. Los
							consumidores y sus hijos pueden aprender de primera mano de los agricultores sobre los
							productos y cómo se crían. Los agricultores interactúan y mejoran las comunidades a las que
							sirven. Apoye a los agricultores en nuestra <a>tienda</a>.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Accordion;
