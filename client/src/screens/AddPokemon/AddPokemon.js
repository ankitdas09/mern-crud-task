import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./styles.css";
import { getAPokemon, postNewPokemon, updatePokemon } from "../../api";
const AddPokemon = ({ _name = "", _desc = "", _points = 15 }) => {
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (params.id) {
			const handler = async () => {
				const resp = await getAPokemon(params.id);
				console.log(resp);
				if (!resp.id) {
					navigate("/add");
					return;
				}
				setName(resp.name);
				setDesc(resp.description);
				setPoints(resp.points);
				setUpdate(true);
			};
			handler();
		}
	}, []);

	const [name, setName] = useState(_name);
	const [desc, setDesc] = useState(_desc);
	const [points, setPoints] = useState(_points);
	const [update, setUpdate] = useState(false);

	const handleSubmit = async () => {
		if (update) {
			if (!name || !desc || !points) return;
			await updatePokemon(params.id, {
				name: name,
				description: desc,
				points: points,
			});
			navigate("/");
		} else {
			if (!name || !desc || !points) return;
			await postNewPokemon({
				name: name,
				description: desc,
				points: points,
			});
			navigate("/");
		}
	};

	return (
		<div>
			<div className="container">
				<table>
					<tbody>
						<tr>
							<td>
								<Link to={"/"} className="btn-secondary">
									Go Back
								</Link>
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="name">Name</label>
							</td>
							<td className="input-form">
								<input
									type="text"
									id="name"
									value={name}
									onChange={(e) => {
										setName(e.target.value);
									}}
									required
								/>
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="name">Description</label>
							</td>
							<td className="input-form">
								<textarea
									type=""
									id="name"
									value={desc}
									onChange={(e) => {
										setDesc(e.target.value);
									}}
									required
								/>
							</td>
						</tr>
						<tr>
							<td>
								<label htmlFor="points">Points</label>
							</td>
							<td className="input-form">
								<input
									type="number"
									id="points"
									max={99}
									min={15}
									value={points}
									onChange={(e) => {
										setPoints(e.target.value);
									}}
									required
								/>
							</td>
						</tr>
						<tr>
							<td>
								<div
									className="btn-primary"
									onClick={handleSubmit}
								>
									Submit
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AddPokemon;
