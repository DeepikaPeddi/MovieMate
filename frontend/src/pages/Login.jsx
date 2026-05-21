import { useState } from "react";

import "../styles/Login.css";
import { login } from "../services/authService";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";
import { Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogin(event) {

    event.preventDefault();

    const userData = {
      email: email,
      password: password
    };

    try {

      const response = await login(userData);

      console.log("FULL RESPONSE:", response.data);

      loginUser(response.data.token);
      console.log("TOKEN:", response.data.token);

     //alert("Login Successful");

     navigate("/");

    } catch (error) {

      console.log(error);

      alert("Invalid Credentials");

    }

  }

  return (

    <div className="auth-container">

      <div className="auth-card">

        <h1>Welcome Back</h1>

        <form
          className="auth-form"
          onSubmit={handleLogin}
        >

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="auth-link">

          Don't have an account?{" "}

          <Link to="/signup">
            Signup
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;