import React, { useEffect, useState } from "react";
import { getAllPokemons } from "../../api";
import PokeCard from "../pokecard/PokeCard";
import "./styles.css";
const PokeDex = () => {
	const [pokemons, setPokemons] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		const run = async () => {
			const data = await getAllPokemons();
			if (!data) {
				setError(true);
				setPokemons([]);
				return;
			}
			setPokemons(data);
			setError(false);
		};
		run();
	}, []);
	return (
		<div className="pokedex">
			{error && " error"}
			{pokemons.map((pokemon) => (
				<PokeCard key={pokemon.id} pokemon={pokemon} />
			))}
		</div>
	);
};

export default PokeDex;
