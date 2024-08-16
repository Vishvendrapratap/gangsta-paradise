// src/GangstaParadiseSection.js
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./styles/GangstaParadiseSection.css"; // Custom CSS for additional styling

const GangstaParadiseSection = () => {
  return (
    <section className="gangsta-paradise-section">
      <Card className="gangsta-card">
        <CardContent className="gangsta-content">
          <Typography variant="h5" component="h2">
            Reach us at:
          </Typography>
          <div className="contact-info">
            <div className="map-container">
              <iframe
                title="Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223268.01678348923!2d77.39000178671874!3d29.029931699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c658b19d34bcb%3A0xca75a74cad61ee15!2sCity%20Super%20Market!5e0!3m2!1sen!2sin!4v1723747192241!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <Typography variant="body1" component="p" className="phone-number">
              Call us at: <a href="tel:+917902140289">+917902140289</a>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default GangstaParadiseSection;
