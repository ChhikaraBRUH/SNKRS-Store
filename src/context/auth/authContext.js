import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [authToken, setAuthToken] = useState(null);

	useEffect(() => {
		localStorage.setItem("authToken", authToken);
	}, [authToken]);

	return <AuthContext.Provider value={{ authToken, setAuthToken }}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
