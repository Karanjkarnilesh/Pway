import React from 'react';
import {
  FaBars,
  FaBell,
  FaUserFriends,
  FaSearch,
  FaPowerOff,
  FaUserCircle,
  FaMoneyCheckAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = ({ isSidebarClose, setIsSidebarClose }) => {

  return (
    <nav className={`navminwidth bg-[#B8113A] text-white flex items-center justify-between px-4 py-2 shadow-md float-right
       ${isSidebarClose ? 'navminwidth' : 'navmaxwidth'
      }`
    }>

      {/* Left: Logo + Hamburger */}

      <div className="flex items-center gap-4">
        <button
          className="text-xl cursor-pointer"
          onClick={() => setIsSidebarClose(!isSidebarClose)}
        >
          <FaBars />
        </button>
      </div>


      {/* Right: Icons */}
      <div className="flex items-center gap-6 text-lg">
        {/* Bell with badge */}
        <Link to="notifaction">
          <div className="relative cursor-pointer">
            <FaBell />
          </div>
        </Link>
        <Link to="/switchuser">
          <div className="relative cursor-pointer">
            <FaUserFriends />
          </div>
        </Link>
        <div className="relative cursor-pointer">
          <FaMoneyCheckAlt />
        </div>
        <div className="relative cursor-pointer">
          <FaSearch />
        </div>
        <div className="relative cursor-pointer">
          <FaPowerOff />
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 bg-white text-black rounded-full px-2 py-1 cursor-pointer">
          <FaUserCircle className="text-2xl" />
          <span className="text-sm font-semibold">nilesh</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
