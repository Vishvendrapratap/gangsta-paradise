// src/MovingTilesSection.js
// import React from "react";
// import {
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Button,
//   Typography,
// } from "@mui/material";
// import "./styles/MovingTilesSection.css"; // Custom CSS for the moving tiles
// src/MovingTilesSection.js
import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import "./styles/MovingTilesSection.css"; // Custom CSS for the moving tiles

const tiles = [
  {
    id: 1,
    title: "T-Shirts",
    description: "Description for image 1",
    image: "/images/card1.jpg",
  },
  {
    id: 2,
    title: "Denims",
    description: "Description for image 2",
    image: "/images/card2.jpg",
  },
  {
    id: 3,
    title: "Jeans",
    description: "Description for image 3",
    image: "/images/card3.jpg",
  },
  {
    id: 4,
    title: "Uppers",
    description: "Description for image 4",
    image: "/images/card4.jpg",
  },
];

export default function MovingTilesSection() {
  return (
    <section className="moving-tiles-section">
      <div className="moving-tiles-container">
        {tiles.concat(tiles).map(
          (
            tile // Duplicate the tiles to create a seamless loop
          ) => (
            <Card key={tile.id} className="moving-tile">
              <CardMedia
                component="img"
                alt={tile.title}
                height="200"
                image={tile.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {tile.title}
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
          )
        )}
      </div>
    </section>
  );
}
