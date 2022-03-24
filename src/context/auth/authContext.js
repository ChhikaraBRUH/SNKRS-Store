import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const navigate = useNavigate();

	const initialToken = localStorage.getItem("token");
	const [token, setToken] = useState(initialToken || null);

	const initialIsAuth = localStorage.getItem("isAuth");
	const [isAuth, setIsAuth] = useState(initialIsAuth || null);

	return <AuthContext.Provider value={{ isAuth, setIsAuth, token, setToken, navigate }}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
