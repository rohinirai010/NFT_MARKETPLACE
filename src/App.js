import { useAuth0 } from "@auth0/auth0-react";
import "./app.css";
import Layout from "./components/Layout/Layout";
import loadingImg from "./assets/images/loading-gif.gif";

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
    return <div style={{marginTop:'15%', marginLeft:'40%'}}> <img src={loadingImg} alt="" /></div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        <Layout />
      </div>
    );
  } else {
    return loginWithRedirect()
  }
}
export default App;