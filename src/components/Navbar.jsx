import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from "../styles";
import { navLink } from '../constants';
import { logo, menu, close } from '../assets'; // Ensure correct paths for assets

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-1 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link
          to=""
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo" className="w-16 h-16 sm:w-15 sm:h-15 object-contain" />
          <p className="text-white text-[16px] flex sm:text-[18px] font-bold cursor-pointer">
            Aditi Chauhan &nbsp; <span className="sm:block hidden"> | Web Developer</span>
          </p>
        </Link>

        {/* Desktop Links (visible on sm and larger) */}
        <div className="hidden sm:flex flex-row font-bold text-[15px] sm:text-[15px] gap-6 sm:gap-10">
          {navLink.map((link) => (
            <Link
              key={link.id}
              to={`#${link.id}`} // Ensure correct path with hash
              className={`text-white hover:text-gray-600 ${active === link.title ? "text-gray-600" : ""}`}
              onClick={() => {
                setActive(link.title);
                setToggle(false); // Close the mobile menu if it was open
              }}>
              {link.title}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          
          {/* Mobile Menu Links */}
          <div className={`${toggle ? "flex" : "hidden"} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex flex-col gap-3">
              {navLink.map((link) => (
                <li key={link.id}>
                  <Link
                    to={`#${link.id}`} // Ensure correct path with hash
                    className="text-white text-[14px]"
                    onClick={() => {
                      setToggle(false);
                      setActive(link.title);
                    }}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
