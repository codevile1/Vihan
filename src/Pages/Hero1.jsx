import { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { Link } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1619995745882-f4128ac82ad6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1675826774817-fe983ceb0475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=2108&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1680897460543-c65c9604b11d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // auto-slide every 5s

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden  bg-black ">
      <div className="absolute  text-white top-1/2 z-40  transform -translate-y-1/2  w-full lg:p-10 p-4 flex items-center justify-center flex-col">
        <h1
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
          className="lg:text-8xl lg:leading-[5vw] leading-[13vw] text-center lg:font-normal font-extralight text-6xl lg:max-w-5xl  leading-tighter tracking-tighter  "
        >
          Capturing moments today, creating memories for tomorrow.
        </h1>
        <Link
          to="/appointment"
          className="  mt-2    group relative overflow-hidden lg:px-6  px-4 py-2 lg:py-3 lg:text-base text-xs rounded-full font-medium tracking-wide bg-[#B9FD50] text-black  cursor-pointer  shadow-lg hover:shadow-lg transition-all"
        >
          <span className="relative z-10 flex items-center justify-center  gap-2 ">
            Book a Session
            <MdArrowOutward className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
          </span>
          <span className="absolute inset-0 bg-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out "></span>
        </Link>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <p
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
          className="text-white lg:text-xl  italic opacity-80"
        >
          “ Every frame, a story. ”
        </p>
      </div>

      {/* Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute w-full h-full  lg:object-center object-cover transition-opacity  duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Controls */}
      <div className="absolute  bottom-[50%] left-1/2 transform -translate-x-1/2 flex items-center justify-between w-full  z-50 lg:px-10 px-4">
        <button
          onClick={goToPrev}
          className="bg-white/10  backdrop-blur-md border text-white border-white/20 bg-opacity-30 p-3 flex items-center justify-center rounded-full hover:bg-opacity-50 transition-all"
        >
          <VscChevronLeft />
        </button>
        <button
          onClick={goToNext}
          className="bg-white/10  backdrop-blur-md border text-white border-white/20 bg-opacity-30 p-3 flex items-center justify-center rounded-full hover:bg-opacity-50 transition"
        >
          <VscChevronRight />
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="hidden absolute lg:flex items-center justify-center bottom-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 bg-opacity-20  px-16 py-2 rounded-lg text-white text-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Glassmorphic Next Image Preview */}
      <div className="hidden absolute lg:bottom-4 flex-col text-white  right-4 lg:flex items-center justify-end  gap-3 bg-white/10 backdrop-blur-md border border-white/20 bg-opacity-10  px-3 py-2 rounded-lg">
        <img
          src={images[(currentIndex + 1) % images.length]}
          alt="Next Slide"
          className="w-26 h-16 object-cover rounded-md"
        />
      </div>
    </div>
  );
}
