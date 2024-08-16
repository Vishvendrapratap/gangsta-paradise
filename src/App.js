// src/App.js
import React from "react";

import FloatingHeader from "./components/FloatingHeader";
import SlidingImage from "./components/SlidingImage";
import OrderSection from "./components/OrderSection";
import GangstaParadiseSection from "./components/GangstaParadiseSection";
import "./App.css";
import MovingTilesSection from "./components/MovingTilesSection";
import AboutUsSection from "./components/AboutUsSection";

function App() {
  const targetDate = new Date(Date.now() + 1000 * 60 * 60 * 24);

  return (
    <div className="App">
      <FloatingHeader />

      <main style={{ marginTop: "60px", minHeight: "calc(100vh - 60px)" }}>
        <SlidingImage />
        <MovingTilesSection />
        {/* <section id="online-orders">
          <OrderSection />
        </section> */}
        <section id="about-us" style={{ padding: "20px" }}>
          <h2>About Us</h2>
          <AboutUsSection />
        </section>
        <GangstaParadiseSection /> {/* Add the new section here */}
      </main>
    </div>
  );
}

export default App;
