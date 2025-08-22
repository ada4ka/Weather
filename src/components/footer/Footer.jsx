import React from "react";
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer" >
   <img src="" alt="" className="footer-logo" />
   <ul className="footer-list">
    <h3 className="footer-list-title">Adress</h3>
    <li className="footer-list-title" >Svobody str. 35</li>
    <li className="footer-list-title" >Kyiv</li>
    <li className="footer-list-title" >Ukraine</li>
   </ul>
   <ul className="footer-list-contact" >
    <h3 className="footer-list-contact-title"></h3>
    <div className="footer-list-contact-links">
        <a href="#" className="footer-list-contact-links-photo">
            <img className="foote-list-contacts-links-photo-poster" src="" alt="" />
        </a>
         <a href="#" className="footer-list-contact-links-photo">
            <img className="foote-list-contacts-links-photo-poster" src="" alt="" />
         </a>
          <a href="#" className="footer-list-contact-links-photo">
            <img className="foote-list-contacts-links-photo-poster" src="" alt="" />
          </a>
    </div>
   </ul>
    </footer>
  );
};

export default Footer;