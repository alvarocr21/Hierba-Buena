import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/landingPage/Hierbabuena01.png";
export const Navbar = () => {
	const [menuDisplay, setMenuDisplay] = useState(false);
	let fadeClass = undefined;
	let openClass = undefined;

	if (menuDisplay === true) {
		fadeClass = "fade";
		openClass = "open";
	} else {
		fadeClass = "";
		openClass = "";
	}

	return (
		<nav className="fixed-top">
			<div>
				<Link to="/">
					{" "}
					<span id="titulo-navbar" className="pl-1">
						<img id="logo" src={logo} />
					</span>
				</Link>
			</div>
			<div className="hamburger" onClick={() => setMenuDisplay(!menuDisplay)}>
				<div className="line" />
				<div className="line" />
				<div className="line" />
			</div>
			<ul className={"nav-links " + openClass}>
				{" "}
				<li className={fadeClass}>
					<Link to="/Products" onClick={() => setMenuDisplay(!menuDisplay)}>
						<span className="navbar-brand mb-0 h1">Tienda</span>
					</Link>
				</li>
				<li className={fadeClass}>
					<Link to="/Login">
						<span className="navbar-brand mb-0 h1" onClick={() => setMenuDisplay(!menuDisplay)}>
							Iniciar sesión / inscribirse
						</span>
					</Link>
				</li>
				<li className={fadeClass}>
					<Link to="/Blog">
						<span className="navbar-brand mb-0 h1" onClick={() => setMenuDisplay(!menuDisplay)}>
							Blog
						</span>
					</Link>
				</li>
				<li className={fadeClass}>
					<Link to="/ContactUs">
						<span className="navbar-brand mb-0 h1" onClick={() => setMenuDisplay(!menuDisplay)}>
							Contáctenos
						</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
