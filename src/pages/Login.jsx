import React, {useState} from "react";
import "../styles/login.css";
import CommonSection from "../components/ui/Common-section/CommonSection";
import { NavLink, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle login logic
  };
  
  return (
    <>
      <CommonSection title="Login" />
      <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label className="email-input">
          Email:
          <input
            
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label className="password-input">
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <div className="btn">
        <button type="submit">Login</button>
        <button type="">
        <Link to="/signup">Sign up</Link>
        </button>
        </div>
        
      </form>
    </div>

    {/* <div className="login-div">
      <div className="email-input">
        <label htmlFor="">Email</label>
        <input type="text" id=""/>
      </div>
      <div className="password-input">
        <label htmlFor="">Password</label>
        <input type="text" id="" />
      </div>
      <div className="forget-signup">
       <a href="">Forget Password</a>
       <a href="">sign up</a>
      </div>
    </div> */}
    </>
  );
}

export default Login;
