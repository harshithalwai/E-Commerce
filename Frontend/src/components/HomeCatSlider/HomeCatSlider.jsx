import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const categories = [
  "Mobiles",
  "Laptops",
  "Accessories",
  "Smartwatches",
  "Headphones",
  "Gaming",
  "Tablets",
  "Speakers",
  "Cameras",
  "Printers",
  "Smart TVs",
  "Monitors",
];

const HomeCatSlider = () => {
  return (
    <div className="w-full py-4">
      <div className="container mx-auto">
        
        <div className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2">
          {categories.map((category, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 120,
                maxWidth: 120,
                borderRadius: "12px",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform: "translateY(-8px) scale(.99)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
                },
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
              className="snap-start flex-shrink-0"
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100"
                  image="./phone-categoryimagelist.jpg"
                  alt={category}
                  style={{
                    height: "100px",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  className="flex justify-center items-center"
                  sx={{ padding: "8px 4px !important" }}
                >
                  <Typography
                    variant="body2"
                    className="!font-bold text-gray-700 text-center"
                    sx={{
                      fontSize: "0.813rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {category}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCatSlider;
