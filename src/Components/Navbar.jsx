import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu when clicking link
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] flex flex-col md:flex-row justify-between items-center px-8 py-3 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_4px_20px_rgba(255,255,255,0.1)] z-50">
      
      {/* Top Bar: Logo + Hamburger */}
      <div className="flex w-1/2 justify-between items-center ">
        <div className="flex items-center gap-2 ">
          <h1 className="text-white lg:text-3xl font-extralight italic uppercase  hover:text-[#B9FD50] transition-all duration-1000">
            Vihan Pixels
          </h1>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Links & Right Section */}
      <div
        className={`flex flex-col md:flex-row md:items-center  lg:w-full md:w-auto gap-4 mt-4 md:mt-0 text-center md:text-left transition-all duration-300 ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        {/* Nav Links */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full">
          {["Portfolio", "About", "Testimonial", "Contact"].map((item) => {
            const route = item === "Portfolio" ? "/" : `/${item.toLowerCase()}`;
            return (
              <NavLink
                key={item}
                to={route}
                onClick={handleLinkClick} // Close menu on click
                className={({ isActive }) =>
                  `relative overflow-hidden text-gray-300 text-base font-medium transition-all duration-300 group ${
                    isActive
                      ? "text-[#B9FD50] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#79519E] after:rounded-full"
                      : "hover:text-white"
                  }`
                }
              >
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                  {item}
                </span>
                <span className="absolute left-0 top-full block text-[#B9FD50] transition-transform duration-300 group-hover:translate-y-[-100%]">
                  {item}
                </span>
              </NavLink>
            );
          })}
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-center mt-4 md:mt-0 justify-center w-full">
          <NavLink
            to="/appointment"
            onClick={handleLinkClick}
            className="group relative overflow-hidden px-4 py-2 rounded-full font-medium tracking-wide bg-[#B9FD50] text-black cursor-pointer shadow-lg hover:shadow-lg transition-all"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Book a Session
              <MdArrowOutward className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            </span>
          </NavLink>

          {/* Social Icons */}
          <div className="flex gap-3 justify-center md:justify-start">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-xl transition-all duration-300 hover:text-[#B9FD50] hover:-translate-y-1"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-xl transition-all duration-300 hover:text-[#B9FD50] hover:-translate-y-1"
            >
              <FaPinterest />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-xl transition-all duration-300 hover:text-[#B9FD50] hover:-translate-y-1"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
