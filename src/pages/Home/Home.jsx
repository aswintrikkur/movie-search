import React, { useState } from "react";
import "./Home.css";

export const Home = () => {



	return (
		<div className="home-container">
			<div className="search-bar-container">
				<i className="fa-solid fa-magnifying-glass"> </i>
				<input type="text" placeholder="search here"  />
        <i className="fa-solid fa-xmark"></i>
			</div>
		</div>
	);
};
