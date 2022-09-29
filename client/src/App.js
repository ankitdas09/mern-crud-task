import { getAllPokemons } from "./api";
import NavBar from "./components/navbar/NavBar";
import PokeDex from "./components/pokedex/PokeDex";
function App() {
	const run = async () => {
		console.log(await getAllPokemons());
	};
	run();
	return (
		<div className="App">
			<NavBar />
			<PokeDex />
		</div>
	);
}

export default App;
