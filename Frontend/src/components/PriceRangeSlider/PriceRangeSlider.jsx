import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

function PriceRangeSlider({ min = 0, max = 500, step = 5 }) {
  const [priceRange, setPriceRange] = useState([37, 94]);

  const handleSliderChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <Box className="w-full  ">
      <h3 className="text-lg font-semibold text-gray-900  px-4 py-3">Price</h3>
      <Slider
        value={priceRange}
        onChange={handleSliderChange}
        min={min}
        max={max}
        step={step}
        valueLabelDisplay="auto"
        marks={[
          { value: min, label: `$${min}` },
          { value: max, label: `$${max}` },
        ]}
        sx={{
          color: "#ef4444", // red-500
          height: 6,
          "& .MuiSlider-thumb": {
            width: 24,
            height: 24,
            backgroundColor: "#fff",
            border: "2px solid currentColor",
            "&:hover": { boxShadow: "0 0 0 8px rgba(239, 68, 68, 0.16)" },
          },
          "& .MuiSlider-track": { border: "none", borderRadius: 2 },
          "& .MuiSlider-rail": {
            opacity: 1,
            backgroundColor: "#d1d5db",
            borderRadius: 2,
          },
        }}
      />
      <p className="mt-2 text-sm text-gray-700">
        Selected range: ${priceRange[0].toFixed(2)} - $
        {priceRange[1].toFixed(2)}
      </p>
    </Box>
  );
}

export default PriceRangeSlider;
