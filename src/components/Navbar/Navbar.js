import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';


// console.log(src)

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  let navigate = useNavigate();

  const showSidebar = () => setSidebar(!sidebar);
  const onClick=()=>{
    sessionStorage.clear();
    props.setLoggedIn(false);
    navigate(("/"));
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='header'>
       <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link to="/" className="menu-bars" style={{textDecoration:"none",marginTop:"10px"}}>
              <h4>eMunim</h4>
          </Link>
        </div>
        <div className='navbar'>
              <div className="dropdown pmd-dropdown pmd-user-info ml-auto">
               {/* eslint-disable-next-line */}
              <a href="#" className="btn-user dropdown-toggle media align-items-center mr-5" data-toggle="dropdown" data-sidebar="true" aria-expanded="false"  style={{textDecoration:"none", color:"white"}}>
                  <img className="mr-2" src={props.user.img} width="40" height="40" alt="avatar" />
                  <div className="media-body">
                      <h5>{props.user.name}</h5>
                  </div>
                  <i className="material-icons md-light ml-2 pmd-sm"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-right" role="menu">
              <Link to="/settings"><button className="edit_btn">Edit Profile</button></Link>
              <button className="logout" onClick={onClick}>Logout</button>
              </ul>
          </div>
          
        </div>
        
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{zIndex:"4"}}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

