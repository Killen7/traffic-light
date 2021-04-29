import React, { useState } from "react";

//create your first component
export function Home() {
	const [color, setColor] = useState("");

	return (
		<div className="container bg-dark btn-group-vertical col-1 py-3 rounded">
			<button
				onClick={() => {
					setColor("red");
				}}
				className={
					"boton " + (color == "red" ? color : "redapagado")
				}></button>
			<button
				onClick={() => {
					setColor("yellow");
				}}
				className={
					"boton " + (color == "yellow" ? color : "yellowapagado")
				}></button>
			<button
				onClick={() => {
					setColor("green");
				}}
				className={
					"boton " + (color == "green" ? color : "greenapagado")
				}></button>
		</div>
	);
}
