import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaFire, FaMusic, FaGamepad, FaLaptopCode } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-3 sidebar" >
      <ul className="nav nav-pills flex-column mb-auto" >
        <li className="nav-item" >
          <Link to="/" className="nav-link"><FaHome className="me-2"/> Home</Link>
        </li>
        <li>
          <Link to="/" className="nav-link"><FaFire className="me-2" /> Trending</Link>
        </li>
        <li>
          <Link to="/results/music" className="nav-link"><FaMusic className="me-2" /> Music</Link>
        </li>
        <li>
          <Link to="/results/gaming" className="nav-link"><FaGamepad className="me-2" /> Gaming</Link>
        </li>
        <li>
          <Link to="/results/technology" className="nav-link"><FaLaptopCode className="me-2" /> Technology</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;