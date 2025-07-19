import React from 'react';
import './Sidebar.css';

// Remplace les chemins par les bons chemins relatifs à tes assets
import logo1 from '../assets/logo1Sidebar.png';
import logo2 from '../assets/logo2Sidebar.png';
import logo3 from '../assets/logo3Sidebar.png';
import logo4 from '../assets/logo4Sidebar.png';
export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-links">
        <a href="#" className="sidebar-link">
          <img src={logo1} alt="Logo 1" className="sidebar-icon" />
        </a>
        <a href="#" className="sidebar-link">
          <img src={logo2} alt="Logo 2" className="sidebar-icon" />
        </a>
        <a href="#" className="sidebar-link">
          <img src={logo3} alt="Logo 3" className="sidebar-icon" />
        </a>
        <a href="#" className="sidebar-link">
          <img src={logo4} alt="Logo 4" className="sidebar-icon" />
        </a>
      </div>

      <div className="sidebar-copyright">
        Copyright, SportSee 2020
      </div>
    </nav>
  );
}
