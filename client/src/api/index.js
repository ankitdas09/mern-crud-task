const serverURL = "http://localhost:5000";

const GET = async (url) => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		return false;
	}
};

export const getAllPokemons = async () => {
	const resp = GET(`${serverURL}/data`);
	return resp;
};
