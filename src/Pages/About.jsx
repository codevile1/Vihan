import React from "react";
import { CgMailForward } from "react-icons/cg";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white ">
      <div
        className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-[#E67E22] rounded-full blur-3xl opacity-20  pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <div
        className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-purple-600 rounded-full blur-3xl opacity-20 brightness-200  pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <div className="   flex items-end justify-end">
        <h1 className="lg:text-7xl text-2xl lg:ml-20  m-8 leading-none mt-20 w-[80%] tracking-tighter z-20   ">
          <span className="lg:text-8xl text-5xl bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent">
            {" "}
            Every{" "}
          </span>
          picture tells a story. I believe in capturing emotions, not just{" "}
          <div className="inline-block bg-red-400 w-30 h-16">
            <img src="./bg2.jpg" alt="image" className="" loading="lazy" />
          </div>{" "}
          moments turning{" "}
          <span className="lg:text-7xl text-4xl  bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent uppercase">
            Memories
          </span>{" "}
          into timeless frames
          <span className="text-8xl bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent">
            .
          </span>
        </h1>
      </div>
      <div className=" w-full  lg:mt-20 px-10  ">
        <div className="w-full  flex items-center justify-center ">
          <h1 className="lg:text-4xl  text-xs w-full text-center lg:ml-[9.5%]   uppercase  leading-none tracking-tighter lg:flex flex items-center lg:justify-start justify-center lg:gap-4 gap-2 ">
            Behind the Lens
            <CgMailForward className=" inline-block text-purple-800 " />
          </h1>
        </div>
        <div className="w-full flex gap-4 items-top justify-center flex-wrap mt-8 ">
          <div className="lg:w-[50%] h-1/2 lg:p-8 w-full bg-white/10 backdrop-blur-md  rounded-bl-4xl rounded-tr-4xl border border-white/20 text-white p-8 overflow-hidden   ">
            <h1 className="lg:text-xl text-xs lg:mt-10 mt-2 mb-2 lg:mb-4 text-gray-300 ">
              About
            </h1>
            <h1 className="lg:text-2xl text-md  mt-4  ">
              Hola, I’m
              <span className="lg:text-4xl  text-2xl  uppercase">
                {" "}
                VIhan <br />
              </span>{" "}
              a passionate photographer based in Kanpur. I love capturing
              emotions and turning moments into timeless stories.
            </h1>

            <h1 className=" text-gray-300 mt-10 lg:text-xl text-xs ">
              What I Capture
            </h1>
            <h2 className="lg:text-2xl text-md  mt-4 ">
              I specialize in different styles of photography including
              portraits, weddings, pre-weddings, birthdays, and events. My goal
              photos that feel natural, beautiful, and unforgettable.
            </h2>
          </div>

          <div className="lg:w-[30%] lg:h-[60vw] flex items-end justify-end lg:mt-0 mt-6 overflow-hidden z-10">
            <img
              className="shadow-lg transition duration-300 ease-in-out   
             hover:brightness-75 hover:scale-105 hover:grayscale hover:contrast-125"
              src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              loading="lazy"
            />
          </div>
      
        </div>
        
      </div>
    
    </div>
  );
};

export default About;
