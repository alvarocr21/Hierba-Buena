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
						<span className="navbar-brand mb-0 h1">
							Tienda
							<img className="icon" src="https://www.iconsdb.com/icons/preview/white/shop-xxl.png" />
						</span>
					</Link>
				</li>
				<li className={fadeClass}>
					<Link to="/Login">
						<span className="navbar-brand mb-0 h1" onClick={() => setMenuDisplay(!menuDisplay)}>
							Iniciar sesión / Registrarse
							<img
								className="icon"
								src="https://www.iconsdb.com/icons/preview/white/account-login-xxl.png"
							/>
						</span>
					</Link>
				</li>
				<li className={fadeClass}>
					<Link to="/Vendors">
						<span className="navbar-brand mb-0 h1" onClick={() => setMenuDisplay(!menuDisplay)}>
							Vendedores
							<img className="icon" src="https://www.iconsdb.com/icons/preview/white/user-xxl.png" />
						</span>
					</Link>
				</li>
				<li className={fadeClass}>
					<Link to="/Blog">
						<span className="navbar-brand mb-0 h1" onClick={() => setMenuDisplay(!menuDisplay)}>
							Blog
							<img className="icon" src="https://www.iconsdb.com/icons/preview/white/note-2-xxl.png" />
						</span>
					</Link>
				</li>
				<li className={fadeClass}>
					<Link to="/ContactUs">
						<span className="navbar-brand mb-0 h1" onClick={() => setMenuDisplay(!menuDisplay)}>
							Contáctenos
							<img
								className="icon"
								src="https://www.iconsdb.com/icons/preview/white/business-contact-xxl.png"
							/>
						</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
