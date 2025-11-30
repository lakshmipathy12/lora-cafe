import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import AboutSection from "./components/AboutSection";
import SocialSection from "./components/SocialSection";
import ReviewsSection from "./components/ReviewsSection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <AboutSection />
        <SocialSection />
        <ReviewsSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
