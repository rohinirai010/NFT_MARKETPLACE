import { useAuth0 } from "@auth0/auth0-react";
import "./app.css";
import Layout from "./components/Layout/Layout";

function App() {
  const {user,loginWithRedirect} = useAuth0();
  console.log("login current user>>>>>>>>>",user);
  // console.log("is auth>>>>>>.",isAuthenticated);

  return (
  <div>
    <button onClick={(e) => loginWithRedirect()} style={{marginTop:'150px'}}>Log In</button>
    {/* {isAuthenticated ? (<button style={{marginTop:'200px'}}>Logout</button>):(<button onClick={() => loginWithRedirect()} style={{marginTop:'150px'}}>Log In</button>)} */}
    <Layout />;
  </div>

  )
  
}

export default App;
