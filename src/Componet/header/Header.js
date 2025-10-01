import React from 'react';
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

import "./header.css";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
        
          <span><FaMapMarkerAlt  /> Logo</span>
        </div>

        <button className="search-btn">
          <FaSearch className="btn-icon" />
        </button>


      </nav>
    </header>
  );
}
