import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navLinks = [
    { id: 1, text: "About", sectionId: "about" },
    { id: 2, text: "Work", sectionId: "work" },
    // { id: 3, text: "Gallery", path: "/gallery" },
    { id: 4, text: "Contact", sectionId: "contact" },
  ];

  const menuVariants = {
    open: {
      clipPath: "circle(150% at 50% 50%)",
      transition: { type: "spring", stiffness: 20 },
    },
    closed: {
      clipPath: "circle(0px at 50% 50%)",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenu(false);
    }
  };

  return (
    <>
      {/* Background Animation */}
      <motion.div
        className="fixed top-[-35%] left-[-10%] w-[300px] h-[300px] bg-purple-800 rounded-full blur-3xl opacity-50 z-10 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], x: [-20, 20, -20], y: [-10, 10, -10] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <header className="fixed top-0 left-0 w-full z-50 text-white backdrop-blur-md bg-black/10 px-4 pt-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-6 py-4 flex items-center justify-between"
        >
          <h1 className="text-2xl font-extralight uppercase cursor-pointer" onClick={() => scrollToSection("hero")}>
            Vihan PixelS
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 text-lg pr-10">
            {navLinks.map(({ id, text, sectionId, path }) =>
              sectionId ? (
                <span
                  key={id}
                  className="relative inline-block px-1 group overflow-hidden cursor-pointer"
                  onClick={() => scrollToSection(sectionId)}
                >
                  <span className="block transition-transform duration-300 text-xl group-hover:-translate-y-full">
                    {text}
                  </span>
                  <span className="absolute left-0 top-full text-xl block text-[#AAAAAA] transition-transform duration-300 group-hover:translate-y-[-100%]">
                    {text}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#AAAAAA] transition-all duration-300 group-hover:w-full"></span>
                </span>
              ) : (
                <Link
                  key={id}
                  to={path}
                  className="relative inline-block px-1 group overflow-hidden"
                  onClick={() => setMenu(false)}
                >
                  <span className="block transition-transform duration-300 text-xl group-hover:-translate-y-full">
                    {text}
                  </span>
                  <span className="absolute left-0 top-full text-xl block text-[#AAAAAA] transition-transform duration-300 group-hover:translate-y-[-100%]">
                    {text}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#AAAAAA] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50" onClick={() => setMenu(!menu)}>
            {menu ? <IoMdClose size={30} /> : <CgMenuRight size={30} />}
          </div>
        </motion.div>

        {/* Mobile Fullscreen Menu */}
        <motion.div
          initial={false}
          animate={menu ? "open" : "closed"}
          variants={menuVariants}
          className="fixed top-0 left-0 w-full overflow-hidden h-screen bg-gradient-to-tr from-[#4B0082] via-[#2C003E] to-black flex items-center justify-center md:hidden z-40"
        >
          {menu && (
            <motion.ul
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center gap-8 text-2xl font-semibold"
            >
              {navLinks.map(({ id, text, sectionId, path }) =>
                sectionId ? (
                  <li key={id}>
                    <span
                      className="hover:text-purple-300 transition cursor-pointer"
                      onClick={() => scrollToSection(sectionId)}
                    >
                      {text}
                    </span>
                  </li>
                ) : (
                  <li key={id}>
                    <Link
                      to={path}
                      className="hover:text-purple-300 transition"
                      onClick={() => setMenu(false)}
                    >
                      {text}
                    </Link>
                  </li>
                )
              )}
            </motion.ul>
          )}
        </motion.div>
      </header>
    </>
  );
};

export default Navbar;
