import React from "react";
import "./Header.css";
import { useNavigate } from "react-router";

export const Header = () => {
	const navigate= useNavigate();


	return (
		<div>
			<div className="header-container">
				<div className="logo">
					<img src="images/icon-park-solid_movie.svg" alt="logo" />
					<h3>FilmRolls</h3>
				</div>

				<div className="header-btn" > 
					<button> light mode </button>
					<button onClick={()=>navigate('/signin')} > sign in </button>
					<button onClick={()=>navigate('/signup')} > sign up</button>

				</div>
			</div>
		</div>
	);
};
