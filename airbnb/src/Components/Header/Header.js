import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          alt="logo"
          src="/Assets/Images/Logo/logo.png"
        />
      </Link>
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}
