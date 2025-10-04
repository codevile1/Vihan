import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 border-t border-gray-700">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left side */}
        <div className="text-center md:text-left">
          <p className="text-sm">
            © {new Date().getFullYear()} Vihan PixelS. All Rights Reserved.
          </p>
          <p className="text-sm mt-1">
            Designed & Developed by <span className="font-semibold">Satyam Chaurasiya</span> 
          </p>
        </div>

        {/* Right side — portfolio link/logo */}
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <a
            href="https://satyam.dev" // your portfolio link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-400 transition"
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
