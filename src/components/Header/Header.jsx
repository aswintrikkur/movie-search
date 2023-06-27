import React from "react";
import "./Header.css";


export const Header = () => {
	return (
		<div>
			<div className="header-container">
				<div className="logo">
					<img src="images/icon-park-solid_movie.svg" alt="logo" />
					<h3>FilmRolls</h3>
					
				</div>

				<div className="header-btn">
				<button> light mode </button>
				<button> sign in</button>
				</div>
			</div>
		</div>
	);
};
