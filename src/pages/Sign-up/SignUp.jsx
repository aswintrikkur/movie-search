import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {

  const navigate =useNavigate();

	return (
		<div className="form-container">
			<Formik
				initialValues={{ firstName: "", lastName: "", email: "" }}
				validationSchema={Yup.object({
					firstName: Yup.string().max(15, "must be 15 or less character").required("Required"),
					lastName: Yup.string().max(10, "must be 15 or less character").required("Required"),
					email: Yup.string().email("Invalid email address").required("Required"),
				})}
			>
				<Form>
        <button className="close-btn" type="cancel" onClick={()=>{navigate('/')}} > X </button>
					<div className="form-input-container">
						<h2>Registration </h2>

						<Field name="firstName" type="text" placeholder="First Name" />
						<ErrorMessage name="firstName" />

						<Field name="lastName" type="text" placeholder="Last Name" />
						<ErrorMessage name="lastName" />

						<Field name="email" type="email" placeholder="Email" />
						<ErrorMessage name="email" />

						<button type="submit" className="sign-up">
							{" "}
							Sign Up{" "}
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
};
