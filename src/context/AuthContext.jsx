import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(false);

	const user =localStorage.getItem('user')


	const authToggle = () => {
		if (user) {
			setAuth(true);
			return;
		}
		setAuth(false);
	};



	return <AuthContext.Provider value={{ auth, authToggle }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const { auth, authToggle } = useContext(AuthContext);

	return { auth, authToggle };
};
