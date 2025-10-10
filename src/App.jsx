import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Contact from "./Pages/Contact"
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
// import Appointment from "./Pages/AppointmentPage"
import AppointmentPage from "./Pages/AppointmentPage";
// import Footer from "./Components/Footer";
import TestimonialCarousel from "./Pages/Testinominal";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Gallery/>} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonial" element={<TestimonialCarousel/>}/>
        <Route path="/contact" element={<Contact/>} />
         <Route path="/appointment" element={<AppointmentPage/>} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
