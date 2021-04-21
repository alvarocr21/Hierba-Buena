import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/peppermint.jpg";
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
			<div className="hamburger" onClick={() => setMenuDisplay(!menuDisplay)}>
				<div className="line" />
				<div className="line" />
				<div className="line" />
			</div>
			<ul className={"nav-links " + openClass}>
				{" "}
				<li className={fadeClass}>
					<a href="#">Tienda</a>
				</li>
				<li className={fadeClass}>
					<a href="#">Iniciar sesión / inscribirse</a>
				</li>
				<li className={fadeClass}>
					<a href="#">Blog</a>
				</li>
				<li className={fadeClass}>
					<a href="#">Contáctenos</a>
				</li>
				<Link to="/CreateProfile">
					<span className="navbar-brand mb-0 h1">Create Profile</span>
				</Link>
			</ul>
		</nav>
	);
};
