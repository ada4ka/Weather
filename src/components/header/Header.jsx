import React from "react";
import './Header.css';
import FonHeader from '../images/fon-header.png'
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <header className="header"
      style={{
        background: `url(${FonHeader}) no-repeat center/cover`,
      }}>
      <h1 className="header-title">Weather dashboard</h1>
      <div className="header-preview">
        <p className="header-preview-left">Create your personal list of favorite cities and
          always be aware of the weather.</p>
        <hr className="header-preview-vertical-line" />
        <p className="header-preview-right" >October 2023
          Friday, 13th</p>
      </div>
      <form className="header-form">
          <input type="search" name="search" placeholder="Search location..."/>
          <div className="header-form-bg"> 
            <IoIosSearch className="header-form-search" />
          </div>
      </form>
    </header>
  );
};

export default Header
  ;