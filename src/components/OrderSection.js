import React from "react";
import "./styles/OrderSection.css";

const OrderSection = () => {
  return (
    <section className="order-section">
      <h2>Online Orders:</h2>
      <p className="coming-soon">Coming Soon</p>
      <p>
        Visit our offline store at{" "}
        <a
          href="https://maps.app.goo.gl/dKM3TF2ShCJyA78c8"
          target="_blank"
          rel="noopener noreferrer"
          className="store-link"
        >
          this location
        </a>
        .
      </p>
    </section>
  );
};

export default OrderSection;
