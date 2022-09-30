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
		<>
			<div className="pokedex">
				{error &&
					"NETWORK ERROR! MAKE SURE SERVER IS RUNNING ON PORT 5000"}
				{pokemons.map((pokemon) => (
					<PokeCard key={pokemon.id} pokemon={pokemon} />
				))}
			</div>
			<div
				className="info"
				style={{
					fontSize: "0.8rem",
					textAlign: "center",
					marginTop: "20px",
				}}
			>
				MERN CRUD Task
			</div>
		</>
	);
};

export default PokeDex;
