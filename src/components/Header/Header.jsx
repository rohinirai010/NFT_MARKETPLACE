import React, { useRef, useEffect } from "react";
import "./header.css";
import { Container } from "reactstrap";
import Web3 from "web3";
import { useAuth0 } from "@auth0/auth0-react";

import { NavLink, Link } from "react-router-dom";

const NAV__LINKS = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Market",
    url: "/market",
  },
  {
    display: "Create",
    url: "/create",
  },
  {
    display: "Contact",
    url: "/contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  function handleConnect() {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" });
    } else {
      // MetaMask is not installed
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className=" d-flex gap-2 align-items-center ">
              <span>
                <i class="ri-fire-fill"></i>
              </span>
              NFTs
            </h2>
          </div>

          <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="nav__list">
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.url}
                    className={(navClass) =>
                      navClass.isActive ? "active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-5 ">
            <button
              className="btn d-flex gap-2 align-items-center"
              onClick={handleConnect}
              style={{ color: "white" }}
            >
              <span>
                <i class="ri-wallet-line"></i>
              </span>
              connect wallet
              {/* <Link to="/wallet">Connect Wallet</Link> */}
            </button>
            <button
              className="btn d-flex gap-2 align-items-center"
              onClick={() => logout({ returnTo: window.location.origin })}
              style={{color:'white'}}
            >
              <span>
                <i class="ri-wallet-line"></i>
              </span>
              Logout
              {/* <Link to="/login">Logout</Link> */}
            </button>
            {console.log(user)}
            <div className="user-name-head" style={{display:'flex', alignItems:'center'}}>
              <div className="user-name">
                <h5 style={{marginTop:'12px', marginRight:'15px', color:'white'}}>{user.name} </h5>
              </div>
              <div className="user-image">
                <img
                  src={user.picture}
                  alt="img"
                  style={{ borderRadius: "50%", height: "43px" }}
                />
              </div>
            </div>
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
