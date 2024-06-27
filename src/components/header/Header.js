import React from "react"
import "./Header.css"
import { Link } from "react-router-dom";
import Logo from "./arf.png";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/"><img className="header__icon" src={Logo} /></Link>
        <Link to="/movies/popular" style={{textDecoration: "None"}}><span>Popular</span></Link>
        <Link to="/movies/top_rated" style={{textDecoration: "None"}}><span>Top Rated</span></Link>
        <Link to="/movies/upcoming" style={{textDecoration: "None"}}><span>Upcoming</span></Link>
      </div>
    </div>
  )
};

export default Header;