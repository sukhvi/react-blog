import {  NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="header">
      <img
        width="100"
        src={require("../../assets/blog-logos/blog-logos.jpeg").default}
        alt="blog logo"
      />
      <nav className="navBar">
        <NavLink exact to="/" >Blog</NavLink>
        <NavLink to="/create">New Post</NavLink>
        <a href="http://www.sukhvi.com/" target="_blank" rel='noreferrer'>Made By </a>
      </nav>
    </div>
  );
};

export default NavBar;
