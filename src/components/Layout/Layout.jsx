import React from "react";
import Routers from "../../routes/Routers";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"; 
// import {NFTMarketplaceProvider} from "Context/NFTMarketplaceContext"

const Layout = () => {
  return (
    <div>
      {/* <NFTMarketplaceProvider> */}
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
      {/* </NFTMarketplaceProvider> */}
    </div>
  );
};

export default Layout;
