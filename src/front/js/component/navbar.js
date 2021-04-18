import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav>
			<div className="hamburger">
				<div className="line" />
				<div className="line" />
				<div className="line" />
			</div>
			<ul className="nav-links">
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
				<li>
					<a href="#">Projects</a>
				</li>
			</ul>
		</nav>
	);
};
