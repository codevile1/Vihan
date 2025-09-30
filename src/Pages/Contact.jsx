import { FaInstagram, FaFacebook, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="relative w-full  overflow-hidden">
          <div
        className="absolute  top-[-10%] left-[40%] w-[300px] h-[300px] bg-purple-800 rounded-full blur-3xl opacity-50 z-10 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
          <div
        className="absolute top-[35%] left-[-10%] w-[300px] h-[300px] bg-[#E67E22] rounded-full blur-3xl opacity-50 z-10 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
    <section id="contact" className="bg-black text-white py-20 px-6">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section */}
        <div>
          <h2 className="text-6xl uppercase  mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent">Say Hello</span>
          </h2>
          <p className="text-gray-400 mb-6 max-w-md">
            I’d love to hear from you! Whether you’re planning a wedding, a birthday, or just want a timeless portrait — let’s capture your moments together.  
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-300">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-purple-400" /> yourmail@example.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-400" /> +91 98765 43210
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 mt-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 text-2xl transition"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-orange-400 text-2xl transition"><FaFacebook /></a>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className=" border-2 border-dashed p-8 rounded-2xl shadow-lg z-20">
          <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-black border-2 border-dashed border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-black border-2 border-dashed border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-black border-2 border-dashed border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-orange-500 hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
   
</div>

  );
}
