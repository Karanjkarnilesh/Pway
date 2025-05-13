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

const Navbar = ({isSidebarClose,setIsSidebarClose}) => {
  
  return (
    <nav className={`navwidth bg-[#B8113A] text-white flex items-center justify-between px-4 py-2 shadow-md float-right
       ${
        isSidebarClose ? 'navminwidth' : 'navmaxwidth'
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
        <div className="relative cursor-pointer">
          <FaBell />
          <span className="absolute -top-2 -right-2 bg-orange-500 text-xs w-4 h-4 flex items-center justify-center rounded-full">
            8
          </span>
        </div>
        <div className="relative cursor-pointer">
          <FaUserFriends />
        </div>
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
