import React, { useEffect, useState } from "react";
import "./Intro.css";
import { useNavigate } from "react-router";
import ReactTyped from "react-typed";

export const Intro = () => {
	const [visible, setVisible] = useState(false);
	const navigate = useNavigate();
	const title = `Tired of searching movies and series?`;

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(true);
		}, 5000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div className="title-container">
			<ReactTyped
				className="title1"
				strings={[`Are you tired of searching movies ? `]}
				typeSpeed={40}
				showCursor={false}
			/>
			<ReactTyped
				className="title2"
				strings={[`You're at the right place`]}
				startDelay={3500}
				typeSpeed={30}
				showCursor={false}
			/>

			{visible && (
				<div className="button-container" >
					<button className="join-us" onClick={() => navigate("signin")}>
						{" "}
						JOIN US{" "}
					</button>
					<div></div>
				</div>
			)}
		</div>
	);
};
