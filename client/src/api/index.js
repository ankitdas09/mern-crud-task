import { serverURL } from "../config";

const GET = async (url) => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		return false;
	}
};

const POST = async (url, data) => {
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		return true;
	} catch (error) {
		return false;
	}
};

const DELETE = async (id) => {
	try {
		await fetch(`${serverURL}/data/${id}`, {
			method: "DELETE",
		});
	} catch (error) {
		return false;
	}
};

export const getAllPokemons = async () => {
	const resp = GET(`${serverURL}/data`);
	return resp;
};

export const postNewPokemon = async (data) => {
	const resp = await POST(`${serverURL}/data`, data);
	return resp;
};

export const deletePokemon = async (id) => {
	await DELETE(id);
};

export const getAPokemon = async (id) => {
	const resp = await GET(`${serverURL}/data/${id}`);
	return resp;
};
