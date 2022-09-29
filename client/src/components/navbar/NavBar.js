import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
	return (
		<div className="nav-container">
			<div className="logo">PokeDex</div>
			<div className="content">
				<Link className="btn-add" to={"/add"}>
					Add Pokemon
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
