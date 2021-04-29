import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="row justify-content-center footer-row">
			<a href="#">
				<i className="fab fa-facebook" />
			</a>

			<a href="#">
				<i className="fab fa-twitter" />
			</a>

			<a href="#">
				<i className="fab fa-youtube" />
			</a>

			<a href="#">
				<i className="fab fa-instagram" />
			</a>

			<a href="#">
				<i className="fab fa-linkedin" />
			</a>
		</div>
		<p>
			&#169; {new Date().getFullYear() + "       "}
			<Link to="/Team" className="link">
				Equipo HierbaBuena
			</Link>{" "}
		</p>
	</footer>
);
