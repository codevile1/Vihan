import { useState } from "react";
import { Link } from "react-router-dom";

const AppointmentPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const whatsappMessage = `
Hello, my name is ${name}
Contact number: ${phone}
Email: ${email || "Not provided"}
Message: ${message || "No message provided"}
    `;
    window.open(
      `https://api.whatsapp.com/send?phone=+918858483501&text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );

    await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        email,
        message,
      }),
    });

    setSubmitted(true);
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6 ">
      
      {!submitted ? (
        <div className="flex flex-col md:flex-row  text-white rounded-2xl  overflow-hidden lg:h-[70vh]  max-w-5xl lg:w-fit w-[80vw]  lg:shadow-[0_0_2px_#B9FD50,0_0_3px_#B9FD50,0_0_10px_#B9FD50] shadow-[0_0_1px_#B9FD50,0_0_1px_#B9FD50,0_0_2px_#B9FD50]">
          
          {/* Left Image */}
          <div className="lg:w-1/2 lg:block hidden  relative group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1557053908-4793c484d06f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Appointment"
              className="w-full  h-full object-cover object-center transform transition-all scale-105 duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0  bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="md:w-1/2 h-[70vh] lg:p-10 p-6    flex flex-col justify-center backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-lg"
          >
            <h2 className="lg:text-2xl text-2xl  lg:mb-8 mb-2 text-center text-white">
              Book Appointment
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 lg:p-3 mb-3 border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B9FD50]"
            />

            <input
              type="tel"
              placeholder="Contact Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-2 lg:p-3 mb-3 border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B9FD50]"
            />

            <input
              type="email"
              placeholder="Email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 lg:p-3 mb-3 border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B9FD50]"
            />

            <textarea
              placeholder="Your Message (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              className="w-full p-2 lg:p-3 mb-3 border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B9FD50]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#B9FD50] text-black p-3 cursor-pointer rounded-lg  text-md hover:contrast-125 transition-all duration-300 shadow-2xl"
            >
              Submit
            </button>
          </form>
          
        </div>
        
      ) : (
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Thank You!</h2>
          <p className="text-lg mb-4">Your appointment request has been sent.</p>
          <Link className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-400 transition-all duration-200 " to="/">Back To Home</Link>
        </div>
      )}
    </div>
    
  );
};

export default AppointmentPage;
