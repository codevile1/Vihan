import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className='relative w-full h-screen bg-black text-center overflow-hidden lg:p-10 px-10  flex '>
      <div
        className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-[#E67E22] rounded-full blur-3xl opacity-50 z-10  pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
            <div
        className="absolute top-[80%] right-[-10%] w-[300px] h-[300px] bg-purple-800 rounded-full blur-3xl opacity-50 z-10 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
            <div
        className="absolute top-[40%] left-[-10%] w-[300px] h-[300px] bg-purple-800 rounded-full blur-3xl opacity-50 z-10 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
            <div
        className="absolute top-[45%] left-[38%] w-[300px] h-[300px] bg-[#E67E22] rounded-full blur-3xl opacity-50 z-10 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
<div className="w-1/2  flex items-end justify-start  ">
  <img className="lg:w-[14vw] absolute w-[30vw]   " loading="lazy" src="https://images.unsplash.com/photo-1698717797707-507b5fd279e6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
</div>
<div className=" absolute z-30 lg:top-30 bottom-[25%] right-50   lg:left-[15%] lg:bg-white lg:text-black text-white lg:h-[28vw] h-[40vh] w-[40vw] lg:w-[40vw] flex items-center justify-center flex-col shadow-md">
  <h1 className="lg:text-2xl text-sm font-extralight  uppercase ">Vihan pixels</h1>

  <h1 className="lg:text-7xl text-4xl  ">PHOTOGRAPHY STUDIO</h1>
<Link to="/appointment" className=" lg:block lg:mt-8 group relative overflow-hidden lg:px-6 px-4 py-2 lg:py-3 lg:text-base text-xs rounded-lg font-medium tracking-wide bg-white text-black  cursor-pointer border-gray-300 shadow-lg hover:shadow-lg transition-all">
  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
   Book a Session
  </span>
  <span className="absolute inset-0 bg-black transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
</Link>


</div>
<div className="lg:w-1/2  relative   flex items-center justify-end overflow-hidden lg:z-0 z-20">
  <img className="w-[100vw]" loading="lazy" src="https://images.unsplash.com/photo-1730956613466-031ad4342bd2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
</div>


    </div>
  )
}

export default Hero