import React from "react";
import './Header.css';
const Header= () => {
  return (
    <header className="header">
   <h1 className="header-title">Weather dashboard</h1>
   <div className="header-preview">
    <p className="header-preview-left">Create your personal list of favorite cities and 
        always be aware of the weather.</p>
    <hr className="header-preview-vertical-line" />
    <p className="header-preview-right" >October 2023
      Friday, 13th</p>
   </div>
    </header>
  );
};

export default Header;