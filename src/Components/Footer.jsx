import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="relative  -bottom-8 left-1/2 -translate-x-1/2 w-full rounded-2xl  bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg py-3 z-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left side */}
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Vihan PixelS. All Rights Reserved.
          </p>
          <p className="text-sm mt-1 text-gray-300">
            Designed & Developed by <span className="font-semibold text-white">Satyam Chaurasiya</span> 
          </p>
        </div>

        {/* Right side — portfolio link/logo */}
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <a
            href="https://portfolio-v21.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-[#79519E] transition-all duration-300"
          >
            <span className="text-sm z-50">Contact Me</span>
            <GoArrowUpRight />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
