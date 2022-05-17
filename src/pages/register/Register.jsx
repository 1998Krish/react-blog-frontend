import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Username</label>
            <input className="registerInput" type="text" placeholder="Username" />
            <label>Email</label>
            <input className="registerInput" type="text" placeholder="Enter your email..." />
            <label>Password</label>
            <input className="registerInput" type="password" placeholder="Enter your password..." />
            <div className="registerButtons">
                <button className="registerBtn">
                  <Link to="/register">Register</Link>
                </button>
                <button className="loginBtn">
                  <Link to="/login">Login</Link>
                </button>
            </div>
        </form>
    </div>
  )
}

export default Register