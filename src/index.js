import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Auth0Provider 
      domain="dev-y8swsrzgufj5u0d2.us.auth0.com"
      clientId="5JswRtsHqqf3tgj2OffHHxn8qi2nAxEb"
      authorizationParams={{
        redirect_uri: window.location.origin}}>
      
        <App />
      </Auth0Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
