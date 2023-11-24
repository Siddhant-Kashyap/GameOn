import React from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.svg"


const NavBar = () => {
  return (
    <>
      {/* make te below div inline */}
      <div className="navbar-main">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-item">
          <nav>
            <a>Home</a>
            <a>About</a>
            <a>Services</a>
            <a>Contact</a>
          </nav>
        </div>
        <div className="navbar-button">
       

            <button >Login</button>
            <button >Guest</button>
            
      
        </div>
      </div>
    </>
  );
};

export default NavBar;
