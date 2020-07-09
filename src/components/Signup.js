import React, { useState } from "react";

export default () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={onSubmit} className="mx-auto text-center mt-10 w-1/2">
			<p>
				<label className="block mb-3">Email</label>
				<input
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					className="w-full border border-gray-400 border-solid p-2 mb-3"
					name="name"
					required
				/>
			</p>
			<p>
				<label className="block mb-3">Password</label>
				<input
					value={password}
					onChange={(event) => setPassword(event.target.value)}
					className="w-full border border-gray-400 border-solid p-2 mb-3"
					type="email"
					name="email"
					required
				/>
			</p>

			<p>
				<button
					type="submit"
					className="mt-5 p-3 pr-5 pl-5 bg-green-500 text-white rounded-lg"
				>
					Signup
				</button>
			</p>
		</form>
	);
};
