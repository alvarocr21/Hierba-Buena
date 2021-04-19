import React, { useState } from "react";
import { Link } from "react-router-dom";

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
		<nav>
			<div className="hamburger" onClick={() => setMenuDisplay(!menuDisplay)}>
				<div className="line" />
				<div className="line" />
				<div className="line" />
			</div>
			<ul className={"nav-links " + openClass}>
				<li className={fadeClass}>
					<a href="#">About</a>
				</li>
				<li className={fadeClass}>
					<a href="#">Contact</a>
				</li>
				<li className={fadeClass}>
					<a href="#">Échele miel</a>
				</li>
			</ul>
		</nav>
	);
};
