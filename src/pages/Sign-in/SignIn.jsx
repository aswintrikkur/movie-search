import React from "react";
import "./SignIn.css";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useHandleChange } from "../../hooks/useHandleChange";

export const SingIn = () => {
	const navigate = useNavigate();
	const { auth, authToggle } = useAuth();

	const { field, handleChange, handleUserLogin } = useHandleChange({
		email: "",
		password: "",
	});

	console.log(field);


	return (
		<div className="form-container">
			<h2>Sign In</h2>
			<form >
			<button className="close-btn"  onClick={()=>{navigate('/')}} > X </button>
				<div className="form-input-container">
					<input
						type="text"
						name="email"
						value={field.email}
						id="email"
						onChange={handleChange}
						placeholder="Email or Phone Number"
					/>
					<input
						type="text"
						name="password"
						id="password"
						value={field.password}
						onChange={handleChange}
						placeholder="Password"
					/>
					<button
						className="sign-in"
						
						onClick={() => {
							navigate("/home");
							handleUserLogin();
							authToggle();
						}}
					>
						Sign In
					</button>

					<p className="forgot-password">Forgot Password?</p>
				</div>
				<div className="sign-up-container">
					<p>New to FilmRolls ?</p> <span onClick={()=>navigate('/signup')} >Sign Up now</span>
				</div>
			</form>
		</div>
	);
};
