import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navItems = ["Portfolio", "About", "Testimonial", "Contact"];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[99%] flex flex-col md:flex-row justify-between items-center px-8 py-3 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] z-50">

      {/* Left: Logo + Hamburger */}
      <div className="flex items-center flex-1 justify-between w-full md:w-auto">
        <h1 className="text-black lg:text-3xl font-extralight hover:text-[#007BFF] transition-all duration-500 font-serif">
          Vihan Pixels
        </h1>
        {/* Hamburger / Close Button */}
        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Desktop Links + Button + Social Icons */}
      <div className="hidden md:flex justify-between items-center w-full md:w-auto gap-6">
        {/* Center: Nav Links */}
        <div className="flex gap-6">
          {navItems.map((item) => {
            const route = item === "Portfolio" ? "/" : `/${item.toLowerCase()}`;
            return (
              <NavLink
                key={item}
                to={route}
                className={({ isActive }) =>
                  `relative overflow-hidden text-black text-base font-medium transition-all duration-300 group ${
                    isActive
                      ? "text-[#B9FD50] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#79519E] after:rounded-full"
                      : "hover:text-[#007BFF]"
                  }`
                }
              >
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">{item}</span>
                <span className="absolute left-0 top-full block text-[#007BFF] transition-transform duration-300 group-hover:translate-y-[-100%]">
                  {item}
                </span>
              </NavLink>
            );
          })}
        </div>

        {/* Book Session Button */}
        <NavLink
          to="/appointment"
          className="group relative inline-block overflow-hidden rounded-full lg:px-4 lg:py-2 px-4 py-2 text-sm font-medium tracking-wide bg-[#007BFF] text-white shadow-md transition-all duration-300"
        >
          <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
          <span className="relative z-10 flex items-center justify-center gap-2 lg:text-sm text-xs group-hover:text-white">
            Book a Session
            <MdArrowOutward className="transition-transform duration-150 group-hover:rotate-12 group-hover:scale-110" />
          </span>
        </NavLink>

        {/* Social Icons */}
        <div className="flex gap-3 text-black text-xl">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#007BFF]"><FaInstagram /></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#007BFF]"><FaYoutube /></a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#007BFF]"><FaPinterest /></a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center w-full mt-4 gap-6 md:hidden">
          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-4 items-center">
            {navItems.map((item) => {
              const route = item === "Portfolio" ? "/" : `/${item.toLowerCase()}`;
              return (
                <NavLink
                  key={item}
                  to={route}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `relative overflow-hidden text-black text-base font-medium transition-all duration-300 group ${
                      isActive
                        ? "text-[#B9FD50]"
                        : "hover:text-[#007BFF]"
                    }`
                  }
                >
                  {item}
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Book Session Button */}
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

          {/* Mobile Social Icons */}
          <div className="flex gap-6 text-2xl">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B9FD50]"><FaInstagram /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B9FD50]"><FaYoutube /></a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B9FD50]"><FaPinterest /></a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
