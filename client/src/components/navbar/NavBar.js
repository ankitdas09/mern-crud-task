import React from "react";
import "./styles.css";

const NavBar = () => {
	return (
		<div className="nav-container">
			<div className="logo">PokeDex</div>
			<div className="content">
				<div className="btn-add">Add Pokemon</div>
			</div>
		</div>
	);
};

export default NavBar;
