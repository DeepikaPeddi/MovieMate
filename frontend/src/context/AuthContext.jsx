import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [token, setToken] = useState(
        localStorage.getItem("token")
    );

    function loginUser(jwtToken) {

        localStorage.setItem(
            "token",
            jwtToken
        );

        setToken(jwtToken);
    }

    function logoutUser() {

        localStorage.removeItem("token");

        setToken(null);
    }

    return (

        <AuthContext.Provider
            value={{
                token,
                loginUser,
                logoutUser
            }}
        >

            {children}

        </AuthContext.Provider>
    );
}

export default AuthProvider;