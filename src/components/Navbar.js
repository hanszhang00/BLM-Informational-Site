import React from "react";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";
const Navbar = ({ toggle }) => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <button type='button' className='toggle-btn' onClick={toggle}>
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass='nav-links' />
      </div>
    </nav>
  );
};

export default Navbar;
