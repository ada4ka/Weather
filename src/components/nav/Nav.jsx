import React from "react";
import './Nav.css';
import './Root.css'
const Nav = () => {
  return (
    <nav className="nav" >
   <div className="nav-left">
    <img src="" alt="" className="nav-left-logo" />
     <ul className="nav-left-list">
        <li className="nav-left-list-item">Who we are</li>
        <li className="nav-left-list-item">Contacts</li>
        <li className="nav-left-list-item">Menu</li>
     </ul>
   </div>
   <div className="nav-right">
   <button className="nav-right-enter">Sing Up</button>
   <img src="" alt="" className="nav-right-profile" />
   </div>
    </nav >
  );
};

export default Nav;