import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Workflow from "./components/sections/Workflow";
import Pricing from "./components/sections/Pricing";
import Testimonials from "./components/sections/Testimonials";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Features />
        <Workflow />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default App;
