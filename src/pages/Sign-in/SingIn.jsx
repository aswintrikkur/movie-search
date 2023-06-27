import React from "react";
import "./SignIn.css";

export const SingIn = () => {
	return (
		<div className="form-container">
			<h2>Sign In</h2>
			<form>
				<div className="sign-in-btn-container">
					<input type="text" name="email" id="email" placeholder="Email or Phone Number" />
					<input type="text" name="password" id="password" placeholder="Password" />
					<button className="sign-in"> Sign In </button>
					<p className="forgot-password">Forgot Password?</p>
				</div>
                <div className="sign-up-container">

				<p>New to FilmRolls ?</p> <span>Sign Up now</span>
                </div>
			</form>
		</div>
	);
};
