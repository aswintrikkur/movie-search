import React, { useEffect, useRef, useState } from "react";
import "./Intro.css";
import { useNavigate } from "react-router";
import Typed from "typed.js";

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

	const el = useRef(null);
	
	useEffect(() => {
		const typed = new Typed(el.current, {
			
			strings: ['<h3> Are you tired of searching movies ? </h3> ^1000\n   You are at the right place '], // Strings to display
		  // Speed settings, try diffrent values untill you get good results
		//   startDelay: 300,
		  typeSpeed: 30,
		  showCursor:false
		});
	
		// Destropying
		return () => {
		  typed.destroy();
		};
	  }, []);

	return (
		

		<div className="title-container">
			<span className="title1" ref={el}></span>
			{/* <ReactTyped
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
			/> */}

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
