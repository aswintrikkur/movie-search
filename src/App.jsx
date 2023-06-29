import { useState } from "react";
import "./App.css";
import { FilmRolls } from "./pages/FilmRolls/FilmRolls";
import { SingIn } from "./pages/Sign-in/SingIn";

function App() {
	return (
		<>
			<FilmRolls>
				<SingIn />
			</FilmRolls>
		</>
	);
}

export default App;
