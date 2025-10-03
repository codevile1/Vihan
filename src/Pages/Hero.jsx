import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className='relative w-full h-screen bg-black text-center overflow-hidden flex '>
      {/* <div
        className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-[#E67E22] rounded-full blur-3xl opacity-50 z-10  pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      /> */}
            <div
        className="absolute top-[80%] right-[-10%] w-[300px] h-[300px] bg-purple-800 rounded-full blur-3xl opacity-50 z-10 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
            {/* <div
        className="absolute top-[40%] left-[-10%] w-[300px] h-[300px] bg-purple-800 rounded-full blur-3xl opacity-50 z-10 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      /> */}
            {/* <div
        className="absolute top-[45%] left-[38%] w-[300px] h-[300px] bg-[#E67E22] rounded-full blur-3xl opacity-50 z-10 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      /> */}
{/* <div className="w-1/2  flex items-end justify-start  ">
  <img className="lg:w-[14vw] absolute w-[34vw] lg:z-0 z-40" loading="lazy" src="https://images.unsplash.com/photo-1698717797707-507b5fd279e6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
</div> */}
{/* <div className=" absolute z-30 lg:top-30 bottom-[25%] right-50 lg:left-[15%] lg:bg-white   lg:text-black text-white lg:h-[28vw] h-[40vh] w-[40vw] lg:w-[40vw] lg:flex items-center justify-center flex-col shadow-md">
  <h1 className="lg:text-2xl text-sm font-extralight  uppercase ">Vihan pixels</h1>

  <h1 className="lg:text-7xl text-4xl  ">PHOTOGRAPHY STUDIO</h1>



</div> */}
<div className="flex w-full items-center justify-center overflow-hidden relative">
  <div className="absolute  lg:top-52 left-5  lg:left-50">
      <h1 className=" z-10 text-start text-gray-300 left-20 text-[14vw] font-extralight leading-[12vw] italic">Vihan <br /> Pixels</h1>

    <p className="text-gray-300 z-10  lg:max-w-2xl text-start">Lora debitis beatae, soluta praesentium tempore voluptatibus consequatur repudiandae vero non laudantium quaerat sapiente dolore suscipit vitae itaque. Neque suscipit alias praesentium quisquam explicabo eaque dignissimos debitis dolores quos consequatur.</p>

  </div>

    <img className="object-cover lg:object-[25%_30%] w-full h-full ml-20" loading="lazy" src="/background.png" alt="" />

  {/* <img className="object-cover object-[25%_30%] w-full h-full" loading="lazy" src="https://images.unsplash.com/photo-1730956613466-031ad4342bd2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
</div>


    </div>
  )
}

export default Hero