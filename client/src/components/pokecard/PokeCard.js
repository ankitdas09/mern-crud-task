import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { serverURL } from "../../config";
import { deletePokemon } from "../../api";
import { useNavigate } from "react-router-dom";
const PokeCard = ({ pokemon }) => {
	const handleDelete = async () => {
		await deletePokemon(pokemon.id);
		window.location.reload(false);
	};
	return (
		<div className="pokecard">
			<div className="main">
				<div className="title">{pokemon.name}</div>
				<div className="points">{pokemon.points}</div>
			</div>
			<div className="desc">{pokemon.description}</div>
			<div className="btn-edit">Edit</div>
			<div className="btn-delete" onClick={handleDelete}>
				Delete
			</div>
		</div>
	);
};

export default PokeCard;
