import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const user = false;
  return (
    <div className="navbar">
        <div className="navLeft">
            <i className="navIcons fa-brands fa-facebook-square"></i>
            <i className="navIcons fa-brands fa-instagram-square"></i>
            <i className="navIcons fa-brands fa-github-square"></i>
            <i className="navIcons fa-brands fa-twitter-square"></i>
        </div>
        <div className="navCenter">
            <ul className="navList">
                <li className="navListItem">
                    <Link to="/">Home</Link>
                </li>
                <li className="navListItem">
                    <Link to="/">About</Link>
                </li>
                <li className="navListItem">
                    <Link to="/">Contact</Link>
                </li>
                <li className="navListItem">
                    <Link to="/write">Write</Link>
                </li>
                <li className="navListItem">
                    {user && "Logout"}
                </li>
            </ul>
        </div>
        <div className="navRight">
            {user ? (
                <Link to="/setting" className="userProfile">
                <img src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="userProfile" />
            </Link>
            ) : (
                <ul className="navList">
                    <li className="navListItem">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="navListItem">
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            )}
            <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Navbar