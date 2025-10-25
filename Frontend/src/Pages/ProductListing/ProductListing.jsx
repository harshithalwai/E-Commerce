import React, { useState } from "react";
import { Breadcrumb } from "../../components/index.js";
import { FiMinusSquare } from "react-icons/fi";
import { FaRegSquarePlus } from "react-icons/fa6";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function PriceRangeSlider({ min = 0, max = 500, step = 5 }) {
  const [priceRange, setPriceRange] = useState([37, 94]);

  const handleSliderChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleInputChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = Number(value);
    if (
      newRange[0] <= newRange[1] &&
      newRange[0] >= min &&
      newRange[1] <= max
    ) {
      setPriceRange(newRange);
    }
  };

  return (
    <Box className="w-full  ">
      <h3 className="text-lg font-medium text-gray-900  px-4 py-3">Price</h3>
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

const ProductListing = () => {
  const [subMenuIndex, setSubMenuIndex] = useState(null);

  // Controlled state for checkboxes
  const [filters, setFilters] = useState({});

  const toggleSubMenu = (index) => {
    setSubMenuIndex(index === subMenuIndex ? null : index);
  };

  const handleCheckboxChange = (categoryName, optionValue) => {
    setFilters((prev) => {
      const categoryFilters = prev[categoryName] || [];
      const isChecked = categoryFilters.includes(optionValue);

      return {
        ...prev,
        [categoryName]: isChecked
          ? categoryFilters.filter((val) => val !== optionValue)
          : [...categoryFilters, optionValue],
      };
    });
  };

  const categories = [
    {
      name: "Availability",
      submenu: [
        { label: "Available", count: 15, value: "available" },
        { label: "In Stock", count: 15, value: "in-stock" },
        { label: "Not Available", count: 1, value: "not-available" },
      ],
    },
    {
      name: "Size",
      submenu: [
        { label: "Small", count: 5, value: "small" },
        { label: "Medium", count: 5, value: "medium" },
        { label: "Large", count: 6, value: "large" },
        { label: "XXL", count: 2, value: "xxl" },
      ],
    },
    {
      name: "Color",
      submenu: [
        { label: "Grey", count: 4, value: "grey", color: "bg-gray-400" },
        { label: "Red", count: 3, value: "red", color: "bg-red-500" },
        { label: "Black", count: 3, value: "black", color: "bg-black" },
        { label: "Orange", count: 4, value: "orange", color: "bg-orange-500" },
        { label: "Blue", count: 5, value: "blue", color: "bg-blue-500" },
        { label: "Green", count: 5, value: "green", color: "bg-green-500" },
        { label: "Yellow", count: 3, value: "yellow", color: "bg-yellow-300" },
        { label: "Pink", count: 2, value: "pink", color: "bg-pink-400" },
      ],
    },
    {
      name: "Brand",
      submenu: [
        { label: "Gadget Zone", count: 2, value: "gadget-zone" },
        { label: "Initech Space", count: 2, value: "initech-space" },
        { label: "Looney Tunes", count: 2, value: "looney-tunes" },
        { label: "Massive Dynamic", count: 2, value: "massive-dynamic" },
        { label: "Pro Tech Gear", count: 2, value: "pro-tech-gear" },
        { label: "Soylent Green", count: 3, value: "soylent-green" },
        { label: "The Simpsons", count: 3, value: "the-simpsons" },
        { label: "Weeds Capital", count: 2, value: "weeds-capital" },
      ],
    },
    {
      name: "Condition",
      submenu: [
        { label: "New", count: 9, value: "new" },
        { label: "Refurbished", count: 3, value: "refurbished" },
        { label: "Used", count: 6, value: "used" },
      ],
    },
    {
      name: "Dimension",
      submenu: [
        { label: "60x90cm", count: 3, value: "60x90cm" },
        { label: "20x40cm", count: 3, value: "20x40cm" },
      ],
    },
  ];

  const clearAllFilters = () => {
    setFilters({});
    setSubMenuIndex(null);
    console.log("All filters cleared!");
  };

  return (
    <div className="pt-4">
      <div className="container pb-4">
        <Breadcrumb />
      </div>

      <div className="bg-white">
        <div className="container">
          <div className="min-h-screen p-6 flex gap-6">
            {/* Sidebar Filters */}
            <div className="w-1/3 h-full max-h-screen overflow-y-auto bg-white rounded-lg p-6 shadow-sm scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-100 flex flex-col">
              <div className="flex items-center justify-between mb-5 ">
                <h2 className="text-xl font-semibold">Filter By</h2>
                <button
                  onClick={clearAllFilters}
                  className="flex items-center gap-2 text-gray-600 text-sm hover:text-gray-800"
                >
                  <span>✖️</span> Clear All
                </button>
              </div>
              <div className="w-full rounded-sm bg-gray-500 h-[1.5px]"></div>
              <div className="flex-1">
                {categories.map((category, categoryIndex) => (
                  <div
                    key={categoryIndex}
                    className=" rounded-lg transition-all overflow-hidden"
                  >
                    {/* Category Header */}
                    <div
                      className="flex items-center justify-between cursor-pointer px-4 py-3 "
                      onClick={() => toggleSubMenu(categoryIndex)}
                    >
                      <h3 className="font-semibold">{category.name}</h3>
                      {subMenuIndex === categoryIndex ? (
                        <FiMinusSquare className="text-red-500" size={20} />
                      ) : (
                        <FaRegSquarePlus className="text-gray-500" size={20} />
                      )}
                    </div>

                    {/* Submenu with controlled checkboxes */}
                    {subMenuIndex === categoryIndex && (
                      <div className="px-4 py-3 animate-fadeIn">
                        {category.submenu.map((option) => (
                          <label
                            key={option.value}
                            className="flex items-center justify-between mb-2 cursor-pointer"
                          >
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                className="w-4 h-4"
                                checked={
                                  filters[category.name]?.includes(
                                    option.value
                                  ) || false
                                }
                                onChange={() =>
                                  handleCheckboxChange(
                                    category.name,
                                    option.value
                                  )
                                }
                              />
                              {option.color && (
                                <span
                                  className={`w-4 h-4 rounded-full border border-gray-300 ${option.color}`}
                                ></span>
                              )}
                              <span className="text-sm">{option.label}</span>
                            </div>
                            <span className="text-gray-400 text-sm">
                              ({option.count})
                            </span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <PriceRangeSlider />
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full h-full max-h-screen overflow-y-auto bg-white p-6 shadow-sm">
              {/* Product grid or list will go here */}
              <p className="text-gray-500">Products content goes here...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
