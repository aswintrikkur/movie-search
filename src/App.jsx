import { useState } from "react";
import "./App.css";
import { FilmRolls } from "./pages/FilmRolls/FilmRolls";
import { Intro } from "./pages/Intro/Intro";
import { SingIn } from "./pages/Sign-in/SignIn";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { SignUp } from "./pages/Sign-up/SignUp";

function App() {
	return (
		<>
			<FilmRolls>
				<Routes>
					<Route path="/" element={<Intro />} />

					<Route path="/signin" element={<SingIn />} />
					<Route element={<ProtectedRoute />}>
						<Route path="/home" element={<Home />} />
					</Route>

					<Route path="/signup" element={<SignUp />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</FilmRolls>
		</>
	);
}

export default App;
