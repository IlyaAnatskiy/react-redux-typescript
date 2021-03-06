import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper brown darken-2 p1">
          <a href="/" className="brand-logo">
            React+Typescript+Redux
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Список дел</Link>
            </li>
            <li>
              <Link to="/about">Информация</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
