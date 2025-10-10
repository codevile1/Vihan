import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[99%] flex flex-col md:flex-row justify-between items-center px-8 py-3 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_4px_20px_rgba(255,255,255,0.1)] z-50">

      {/* Left: Logo + Hamburger */}
      <div className="flex items-center flex-1 justify-between w-full md:w-auto">
        <h1 className="text-white lg:text-3xl font-extralight italic uppercase hover:text-[#B9FD50] transition-all duration-1000">
          Vihan Pixels
        </h1>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Center: Nav Links (hidden on small screens) */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="flex gap-6">
          {["Portfolio", "About", "Testimonial", "Contact"].map((item) => {
            const route = item === "Portfolio" ? "/" : `/${item.toLowerCase()}`;
            return (
              <NavLink
                key={item}
                to={route}
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
      </div>

      {/* Right: Button + Icons (hidden on small screens) */}
      <div className="hidden md:flex flex-1 justify-end gap-4 items-center">
        <NavLink
          to="/appointment"
          className="group relative inline-block overflow-hidden rounded-full lg:px-5 lg:py-2 px-4 py-2 text-sm font-medium tracking-wide bg-[#B9FD50] text-black shadow-md transition-all duration-300"
        >
          <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
          <span className="relative z-10 flex items-center justify-center gap-2 lg:text-sm text-xs">
            Book a Session
            <MdArrowOutward className="transition-transform duration-150 group-hover:rotate-12 group-hover:scale-110" />
          </span>
        </NavLink>

        <div className="flex gap-3">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-xl hover:text-[#B9FD50] transition-all">
            <FaInstagram />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-xl hover:text-[#B9FD50] transition-all">
            <FaPinterest />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-xl hover:text-[#B9FD50] transition-all">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center w-full mt-4 gap-6">
          {/* Nav Links */}
          <div className="flex flex-col gap-4 items-center">
            {["Portfolio", "About", "Testimonial", "Contact"].map((item) => {
              const route = item === "Portfolio" ? "/" : `/${item.toLowerCase()}`;
              return (
                <NavLink
                  key={item}
                  to={route}
                  onClick={handleLinkClick}
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

          {/* Button */}
          <NavLink
            to="/appointment"
            onClick={handleLinkClick}
            className="group relative inline-block overflow-hidden rounded-full px-4 py-2 text-sm font-medium tracking-wide bg-[#B9FD50] text-black shadow-md transition-all duration-300"
          >
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 flex items-center justify-center gap-2 lg:text-sm text-xs">
              Book a Session
              <MdArrowOutward className="transition-transform duration-150 group-hover:rotate-12 group-hover:scale-110" />
            </span>
          </NavLink>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-2xl hover:text-[#B9FD50]">
              <FaInstagram />
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-2xl hover:text-[#B9FD50]">
              <FaPinterest />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-2xl hover:text-[#B9FD50]">
              <FaTwitter />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
