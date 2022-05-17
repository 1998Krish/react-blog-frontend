import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input className="loginInput" type="text" placeholder="Enter your email..." />
            <label>Password</label>
            <input className="loginInput" type="password" placeholder="Enter your password..." />
            <div className="loginButtons">
                <button className="loginBtn">
                  <Link to="/login" className="link" >Login</Link>
                </button>
                <button className="registerBtn">
                  <Link to="/register" className="link" >Register</Link>
                </button>
            </div>
        </form>
    </div>
  )
}

export default Login