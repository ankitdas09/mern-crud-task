import { getAllPokemons } from "./api";
import NavBar from "./components/navbar/NavBar";
import PokeDex from "./components/pokedex/PokeDex";
import { Routes, Route } from "react-router-dom";
import AddPokemon from "./screens/AddPokemon/AddPokemon";
function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<PokeDex />
						</>
					}
				/>
				<Route
					path="add"
					element={
						<>
							<AddPokemon />
						</>
					}
				/>
				<Route
					path="add/:id"
					element={
						<>
							<AddPokemon />
						</>
					}
				/>
				<Route path="*" element={<h2>404</h2>} />
			</Routes>
		</div>
	);
}

export default App;
