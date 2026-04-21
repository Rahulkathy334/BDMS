import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import BloodDonationSection from "./components/BloodDonationSection.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Donars from "./pages/Donars.jsx";
import Register from "./pages/Register.jsx";
import RequestBlood from "./pages/RequestBlood.jsx";
import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import BloodDonationCards from "./components/BloodDonationCards.jsx";
import DoctorChatbot from "./pages/DoctorChatbot.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donors" element={ <ProtectedRoute><Donars /> </ProtectedRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/requests" element={<RequestBlood />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<BloodDonationCards />} />
        <Route path="/chat/:doctorId" element={<DoctorChatbot />} />
      </Routes>
      <BloodDonationCards />
      <BloodDonationSection />
      <Footer />
    </Router>
  );
}

export default App;
