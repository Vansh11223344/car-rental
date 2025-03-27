import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/rental-history">Rental History</Link>
        <Link to="/maintenance">Maintenance</Link>
      </nav>
    </header>
  );
};

export default Header;