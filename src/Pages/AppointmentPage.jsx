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
        <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden h-[80vh] max-w-5xl w-fit">
          
          {/* Left Image */}
          <div className="md:w-1/2 relative group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1557053908-4793c484d06f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Appointment"
              className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0  bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="md:w-1/2 p-10 bg-white flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-black">
              Book Appointment
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="tel"
              placeholder="Contact Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              placeholder="Email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              placeholder="Your Message (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              className="w-full p-4 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-purple-700 text-white p-4 rounded-lg font-semibold hover:bg-purple-800 transition-all duration-300 shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Thank You!</h2>
          <p className="text-lg">Your appointment request has been sent.</p>
          <Link to="/">Back To Home</Link>
        </div>
      )}
    </div>
  );
};

export default AppointmentPage;
