import React, {useState} from "react";
import "../styles/login.css";
import CommonSection from "../components/ui/Common-section/CommonSection";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle login logic
  };
  
  return (
    <>
      <CommonSection title="Sign Up" />
      <div className="login-container">
      <form onSubmit={handleSubmit}>
         <label className="username-input email-input">
          User Name:
          <input
            
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
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
        <button type="">sign up</button>
        </div>
        
      </form>
    </div>

    </>
  );
}

export default Login;
