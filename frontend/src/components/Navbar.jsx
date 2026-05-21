import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {

  const { token, logoutUser }
    = useContext(AuthContext);

  console.log(token);

  const navigate = useNavigate();

  const location = useLocation();

  // HIDE NAVBAR ON LOGIN & SIGNUP
  if (

    location.pathname === "/login" ||

    location.pathname === "/signup"

  ) {

    return null;
  }

  // LOGOUT FUNCTION
  function handleLogout() {

    logoutUser();

    navigate("/login");
  }

  return (

    <nav className="navbar">

      <h2 className="logo">
        MovieMate
      </h2>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        {

          !token && (

            <Link to="/login">
              Login
            </Link>

          )

        }

        {

          !token && (

            <Link to="/signup">
              Signup
            </Link>

          )

        }

        {

          token && (

            <Link to="/favorites">
              Favorites
            </Link>

          )

        }

        {

          token && (

            <Link to="/watchlist">
              Watchlist
            </Link>

          )

        }

        {

          token && (

            <Link to="/search">
              Search
            </Link>

          )

        }

        {

          token && (

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          )

        }

      </div>

    </nav>
  );
}

export default Navbar;