import React from "react";
import { Link } from "react-router-dom";

function Logo() {
    return (
      <div className="header-logo">
        <Link to="/">
          <img className="logo" src="../images/logo.png" alt="logo" />
        </Link>
        <h1 className="logo-name">
          <b>
            My Anime
            <br />
            Ichiran
          </b>
        </h1>
      </div>
    );
}

export default Logo;