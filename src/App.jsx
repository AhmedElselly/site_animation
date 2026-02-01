import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Showcase from "./components/ShowCase";
import Features from "./components/Features";
import CTA from "./components/CTA";
import ScrollHorizontal from "./components/ScrollHorizontal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <ScrollHorizontal />
      <Showcase />
      <CTA />
    </div>
  );
}

export default App;
