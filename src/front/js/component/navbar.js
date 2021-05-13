import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/landingPage/Hierbabuena01.png";
import shop from "../../img/navbar/shop-xxl.png";
import login from "../../img/navbar/account-login-xxl.png";
import logout from "../../img/navbar/account-logout-xxl.png";
import user from "../../img/navbar/user-xxl.png";
import editUser from "../../img/navbar/edit-user-xxl.png";
import note from "../../img/navbar/note-2-xxl.png";
import contact from "../../img/navbar/business-contact-xxl.png";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [menuDisplay, setMenuDisplay] = useState(false);

	let fadeClass = undefined;
	let openClass = undefined;
	var hideLogin = "";
	var hideLogout = "hide";

	if (menuDisplay === true) {
		fadeClass = "fade";
		openClass = "open";
	} else {
		fadeClass = "";
		openClass = "";
	}

	if (store.inicioSesion == true) {
		hideLogin = "hide";
		hideLogout = "";
	} else {
		hideLogin = "";
		hideLogout = "hide";
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

			<span className="navbar-brand" id="CarShopping">
				<i className=" fas fa-shopping-cart" />
			</span>
			<ul className={"nav-links " + openClass}>
				{" "}
				<li className={fadeClass}>
					<Link to="/Products" onClick={() => setMenuDisplay(!menuDisplay)}>
						<span className="navbar-brand mb-0 h1">
							Tienda
							<img className="icon" src={shop} />
						</span>
					</Link>
				</li>
				<li className={hideLogout + " " + fadeClass}>
					<Link to="/CreateProfile">
						<span className="navbar-brand mb-0 h1" onClick={() => setMenuDisplay(!menuDisplay)}>
							Crear Perfil
							<img className="icon" src={editUser} />
						</span>
					</Link>
				</li>
				<li className={hideLogin + " " + fadeClass}>
					<Link to="/Login">
						<span className="navbar-brand mb-0 h1" onClick={() => setMenuDisplay(!menuDisplay)}>
							Iniciar sesión / Registrarse
							<img className="icon" src={login} />
						</span>
					</Link>
				</li>
				<li className={fadeClass}>
					<Link to="/Vendors">
						<span className="navbar-brand mb-0 h1" onClick={() => setMenuDisplay(!menuDisplay)}>
							Vendedores
							<img className="icon" src={user} />
						</span>
					</Link>
				</li>
				<li className={fadeClass}>
					<Link to="/Blog">
						<span className="navbar-brand mb-0 h1" onClick={() => setMenuDisplay(!menuDisplay)}>
							Blog
							<img className="icon" src={note} />
						</span>
					</Link>
				</li>
				<li className={fadeClass}>
					<Link to="/ContactUs">
						<span className="navbar-brand mb-0 h1" onClick={() => setMenuDisplay(!menuDisplay)}>
							Contáctenos
							<img className="icon" src={contact} />
						</span>
					</Link>
				</li>
				<li className={hideLogout + " " + fadeClass}>
					<Link to="/Login">
						<span
							className="navbar-brand mb-0 h1"
							onClick={() => {
								setMenuDisplay(!menuDisplay);
								actions.logout();
							}}>
							Cerrar sesión
							<img className="icon" src={logout} />
						</span>
					</Link>
				</li>
				<li>
					<span className="navbar-brand mb-0 h1" id="CarShoppingDesktop">
						<i className=" fas fa-shopping-cart " />
					</span>
				</li>
			</ul>
		</nav>
	);
};
