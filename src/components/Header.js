import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <header>
        <div>
          <h3>sorette</h3>
        </div>
        <nav>
          <ul>
              <li>
                <Link to="/">Top</Link>
              </li>
              <li>
                <Link to="pages">Pages</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
          </ul>
        </nav>
      </header>
  )
};

export default Header;