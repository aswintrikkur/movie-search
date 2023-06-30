import React from "react";
import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
	const { auth, authToggle } = useAuth();

	console.log("auth:", auth);
	// <button onClick={authToggle} > auth toggle </button>


	if (!auth) {
		return <Navigate to='/signin' /> ;
	}
	return <Outlet />
}
