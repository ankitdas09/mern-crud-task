import React from "react";
import "./styles.css";
const PokeCard = ({ pokemon }) => {
	return (
		<div className="pokecard">
			<div className="main">
				<div className="title">{pokemon.name}</div>
				<div className="points">{pokemon.points}</div>
			</div>
			<div className="desc">{pokemon.description}</div>
			<div className="btn-edit">Edit</div>
			<div className="btn-delete">Delete</div>
		</div>
	);
};

export default PokeCard;
