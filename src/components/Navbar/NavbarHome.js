import React from "react";
import "./Navbar.css";
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

function NavbarHome() {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="header">
          <div className="navbar">
            <Link to="/" className="menu-bars" style={{textDecoration:"none"}}>
              <h4>eMunim</h4>
            </Link>
          </div>
          <div className="navbar" style={{display:"flex", justifyContent:"center"}}>
              <div><h4><Link to='/login' style={{marginRight:"40px",textDecoration:"none",color:"white"}}>Login</Link></h4></div>
              <div><h4><Link to='/signup' style={{marginRight:"80px",textDecoration:"none",color:"white"}}>SignUp</Link></h4></div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default NavbarHome;
