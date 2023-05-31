import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <header>
        <div>
          <img src="https://preview.colorlib.com/theme/blogger/img/logo.png" alt="navimage" />
        </div>
        <div>
      <ul>
      <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='add'>
            <li>Add</li>
          </Link>
          <Link>
            <li>News</li>
          </Link>
          <Link>
            <li>Travel</li>
          </Link>
          <Link>
            <li>Fashion</li>
          </Link>
          <Link>
            <li>Team</li>
          </Link>
          <Link>
            <li>Pages <i className="fa-solid fa-caret-down"></i></li>
          </Link>
      </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
