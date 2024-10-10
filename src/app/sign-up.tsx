"use client";

import { client } from "@/lib/auth-client";
import { useState } from "react";

export default function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	const signUp = async () => {
		const res = await client.signUp.email(
			{
				email,
				password,
				name,
			},
			{
				onRequest: (ctx) => {
					//show loading
				},
				onSuccess: (ctx) => {
					//redirect to the dashboard
				},
				onError: (ctx) => {
					alert(ctx.error.message);
				},
			},
		);
	};

	return (
		<div className="flex flex-col gap-5 w-fit">
			<input
				className="border text-2xl px-6 py-3"
				type="name"
				value={name}
				placeholder="name"
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				className="border text-2xl px-6 py-3"
				type="password"
				value={password}
				placeholder="********"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<input
				className="border text-2xl px-6 py-3"
				type="email"
				value={email}
				placeholder="email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<button className="border text-2xl px-6 py-3" onClick={signUp}>
				Sign Up
			</button>
		</div>
	);
}
