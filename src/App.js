import { useAuth0 } from "@auth0/auth0-react";
import "./app.css";
import Layout from "./components/Layout/Layout";

function App() {
  // const {user,loginWithRedirect,isAuthenticated, logout} = useAuth0();
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        <Layout />;
        Hello {user.name}{' '}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      </div>
    );
  } else {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }
}
  // console.log("login current user>>>>>>>>>",user);
  // console.log("is auth>>>>>>.",isAuthenticated);

  // return (
  // <div>
  //   <button onClick={(e) => loginWithRedirect()} style={{marginTop:'150px'}}>Log In</button>
  //   <button onClick={(e) => logout()} style={{marginTop:'200px'}}>Logout</button>
  //   {console.log("login current user>>>>>>>>>",user)}
  //   {/* { isAuthenticated ? (<button style={{marginTop:'200px'}}>Logout</button>):(<button onClick={() => loginWithRedirect()} style={{marginTop:'150px'}}>Log In</button>)} */}
  //   {/* {isAuthenticated?(<h2>hello</h2>:<h2></h2>)} */}
  //   <Layout />;
  // </div>

  // )
  
// }

export default App;
