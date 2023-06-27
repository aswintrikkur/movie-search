import React from "react";
import "./Footer.css";

export const Footer = () => {
	const language = ["English", "Hindi", "Malayalam"];

	return (
		<footer>
			<div className="footer-section">
				<h4>Questions? Call 1-844-505-2993</h4>
				<p>FAQ</p>
				<p>Cookie Preferences</p>

				<div className="drop-down">
					<i className="fa-solid fa-globe"></i>
                    <p> English</p>
                    <img src="images/bi_caret-down-fill.svg" alt="more" />
				</div>

				{/* <select name="language" id="language">
					<option value="english" >English</option>
					<option value="hindi">Hindi</option>
					<option value="malayalalm">Malayalam</option>
				</select> */}
			</div>
			<div className="footer-section">
				<p>Help Center</p>
				<p>Corporate Information</p>
			</div>
			<div className="footer-section">
				<p>Terms of Use</p>
				<p>Privacy</p>
			</div>
			<div className="footer-icons">
				<img src="images\facebook.svg" alt="fb" />
				<img src="images/instagram.svg" alt="insta" />
				<img src="images/twitter.svg" alt="" />
				<img src="images/youtube.svg" alt="" />
			</div>
		</footer>
	);
};
