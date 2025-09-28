import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MouseFollower from "./Components/Mouse";
import About from "./Pages/About";
import Hero from "./Pages/Hero";
import WorkSection from "./Pages/Work";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";
import Gallery from "./Pages/Gallery";
import ContactPage from "./Pages/Contact";
import TestimonialCarousel from "./Pages/Testinominal";
import ScrollToTop from "./Pages/ScrollToTop";
import AppointmentPage from "./Pages/AppointmentPage";

const App = () => {
  return (
    <Router>
            <ScrollToTop />
      <MouseFollower />
      {/* Show Navbar only if NOT appointment page */}
      {location.pathname !== "/appointment" && <Navbar />}

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <div id="hero"><Hero /></div>
              <div id="about"><About /></div>
              <div id="work"><WorkSection /></div>
              <div id="testimonial"><TestimonialCarousel /></div>
              <div id="contact"><ContactPage /></div>
              <Footer />
            </>
          }
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={
            <>
              <ContactPage />
              <Footer />
            </>
          }
        />

        {/* Gallery Page */}
        <Route
          path="/gallery"
          element={
            <>
              <Gallery />
              <Footer />
            </>
          }
        />
          {/* Appointment Page (NEW) */}
        <Route
          path="/appointment"
          element={
            <>
              <AppointmentPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
