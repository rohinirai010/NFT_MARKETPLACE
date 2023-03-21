import React, { useState, useEffect, useContext } from "react";
import web3Modal from "web3modal";
import { ethers } from "ethers";
import Routers from "./src/routes";

//INTERNAL IMPORT
import { NFTMarketplaceAddress, NFTMarketplaceABI } from "./constants";

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = (({children})=> {
    const titleData = "Discover, Collect, and Sell NFTs"
    return(
        <NFTMarketplaceContext.Provider value={{titleData}}>
            {children}
        </NFTMarketplaceContext.Provider>
    )
})