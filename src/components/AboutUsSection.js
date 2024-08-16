// import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { Phone } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

// Define a styled Card component with a maximum width and centered alignment
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: "100%", // Maximum width of the card
  margin: "20px auto", // Center the card horizontally with margin
  backgroundColor: "#1d1d1d", // Dark background for the card
  color: "#fff", // White text color
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)", // Add a shadow for better visibility
}));

const AboutUsSection = () => {
  const phoneNumber = "+917902140289"; // Replace with your actual phone number

  return (
    <Box
      id="about-us"
      sx={{
        padding: 2, // Padding around the section
        display: "flex", // Flexbox for centering content
        justifyContent: "center", // Center the card horizontally
        alignItems: "center", // Center content vertically (optional)
      }}
    >
      <StyledCard>
        <CardMedia
          component="img"
          alt="Gangsta Paradise"
          height="140"
          image="images/IMG_6244.png"
        />
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            About Gangsta Paradise Clothing
          </Typography>
          <Typography variant="body1" paragraph>
            Gangsta Paradise Clothing is a premium fashion brand known for its
            edgy and unique clothing lines. Our collections blend street style
            with high fashion, creating a distinct look that stands out in any
            crowd. Our garments are crafted with the finest materials, ensuring
            both comfort and durability. Gangsta Paradise has something for
            everyone.
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            Founder: Abhishek Tyagi
          </Typography>
          <Typography variant="body1" paragraph>
            Abhishek Tyagi, the visionary behind Gangsta Paradise Clothing, has
            always been passionate about fashion and design. With years of
            experience in the fashion industry, Abhishek has created a brand
            that reflects his unique style and commitment to quality.
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            Store Address
          </Typography>
          <Typography variant="body1" paragraph>
            City Super Market
            <br />
            3, Sardhana Rd, Kanker Khera
            <br />
            Meerut Cantt, Meerut
            <br />
            Uttar Pradesh 250001
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            Contact Us
          </Typography>
          <Box display="flex" alignItems="center">
            <IconButton
              color="inherit"
              href={`tel:${phoneNumber}`}
              aria-label="Call us"
              sx={{ color: "#fff" }}
            >
              <Phone />
            </IconButton>
            <Typography variant="body1" sx={{ marginLeft: 1 }}>
              {phoneNumber}
            </Typography>
          </Box>
        </CardContent>
      </StyledCard>
    </Box>
  );
};

export default AboutUsSection;
