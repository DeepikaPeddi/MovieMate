import { useState } from "react";
 import "../styles/Signup.css";
 import { signup } from "../services/authService";
 import "../styles/Auth.css";
 import { Link } from "react-router-dom";
  import { useNavigate } from "react-router-dom";
  import { toast } from "react-toastify";
  import { useContext } from "react";
  import { AuthContext } from "../context/AuthContext";

  function Signup()
  {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");
        const navigate = useNavigate();
        const { loginUser } = useContext(AuthContext);

        async function handleSignup(event) {

            event.preventDefault();

            const userData = {
                name: name,
                email: email,
                password: password
            };

            try {

                const response = await signup(userData);

                console.log(response.data);

                loginUser(response.data.token);

                navigate("/");

                // SAVE TOKEN


                // SUCCESS MESSAGE
                toast.success(
                    "Account created successfully"
                );

                // REDIRECT TO HOME
                navigate("/");



            } catch (error) {

                console.log(error);

                toast.error("Signup failed");
            }
        }
  return (
      <div className="auth-container">
          <div className="auth-card">
              <h1>Create Account</h1>
              <form className="auth-form" onSubmit={handleSignup} >
      <input
      type="text"
       placeholder="Enter Name"
        value={name}
        onChange={(e) =>
            setName(e.target.value)
            }
        />
        <input
        type="email"
         placeholder="Enter Email"
          value={email}
          onChange={(e) =>
              setEmail(e.target.value)
              } />
          <input type="password"
          placeholder="Enter Password"
           value={password}
           onChange={(e) =>
               setPassword(e.target.value)
               } />
           <button type="submit">
               Signup
                </button>
                 </form>

        <p className="auth-link">
            Already have an account?{" "}
            <Link to="/login"> Login </Link>
            </p>
            </div>
            </div>
             );
            }
        export default Signup;