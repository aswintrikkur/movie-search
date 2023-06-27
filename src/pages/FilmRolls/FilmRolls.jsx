import React, { useEffect, useState } from "react";
import "./FilmRolls.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import axios, { Axios } from "axios";

export const FilmRolls = () => {
	const [movieList, setMovieList] = useState([]);

	const movieAPI =
		"https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";

	const TMDB_MOVIE_LIST_API_ =
		"https://api.themoviedb.org/3/movie/popular?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1";

	const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

	const fetchMovieAPI = async () => {
		// const response = await axios(movieAPI, {
		// 	params: {
		// 		query: "movie",
		// 	},
		// });
		const response = await axios(TMDB_MOVIE_LIST_API_);

		// console.log(response);
		setMovieList(response.data.results);
	};

	useEffect(() => {
		fetchMovieAPI();
	}, []);

	console.log(movieList);



	return (
		<div>
			<main>
				<Header />

				<body>
					<div className="img-container">
						{movieList.map((data) => (
							<div className="item">
								<img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="img" />
								 <p>{data.title}</p> 
							</div>
						))}
					</div>
				</body>

				<Footer />
			</main>
		</div>
	);
};
