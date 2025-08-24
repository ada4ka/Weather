import React from "react";
import './Nav.css';
import { RiAccountCircleFill } from "react-icons/ri";
import LogoNav from '../images/logo-nav.png'

const Nav = () => {
  return (
    <nav className="nav" >
   <div className="nav-left">
  <img src= {LogoNav} alt=""   className="logo"/>
     <ul className="nav-left-list">
        <li className="nav-left-list-item">Who we are</li>
        <li className="nav-left-list-item">Contacts</li>
        <li className="nav-left-list-item">Menu</li>
     </ul>
   </div>
   <div className="nav-right">
   <button className="nav-right-enter">Sing Up</button>
   <div className="nav-profile"> 
               <RiAccountCircleFill className="profile-item" />
             </div>
   </div>
    </nav >
  );
};

export default Nav;