"use client";

import { useState } from "react";
import { SyncsnapUploadButton } from "@syncsnap/react";

export default function HomePage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	return (
		<main
			style={{
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "2rem",
			}}
		>
			<form
				onSubmit={(event) => event.preventDefault()}
				style={{
					width: "100%",
					maxWidth: "480px",
					display: "grid",
					gap: "1rem",
					border: "1px solid #e5e5e5",
					borderRadius: "12px",
					padding: "1.5rem",
				}}
			>
				<h1 style={{ margin: 0 }}>Syncsnap Example</h1>
				<p style={{ margin: 0, color: "#555" }}>
					Fill out the form and start a Syncsnap transfer.
				</p>
				<label>
					Name
					<input
						value={name}
						onChange={(event) => setName(event.target.value)}
						placeholder="Jane Doe"
						style={{
							width: "100%",
							padding: "0.6rem",
							marginTop: "0.25rem",
						}}
					/>
				</label>
				<label>
					Email
					<input
						type="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						placeholder="jane@example.com"
						style={{
							width: "100%",
							padding: "0.6rem",
							marginTop: "0.25rem",
						}}
					/>
				</label>
				<SyncsnapUploadButton
					buttonText="Generate QR"
					qrBaseUrl="http://upload.localhost:3000/"
					waitIntervalMs={5000}
					onJobCreated={(job) => {
						// Basic example: in real apps, send form values along if needed.
						console.log("Job created :", job);
					}}
					onCompleted={(job, result) => {
						// result is whatever your server onCompleted returned
						console.log("Job completed", job, result);
					}}
				/>
			</form>
		</main>
	);
}
