import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "./MainMenu.css";
import { BannerSlider,  DealOfTheDay,  DisplayBar, Products } from "../index.js";

const categories = [
  "All",
  "Smart Watches",
  "Jackets",
  "T-Shirts",
  "Bags",
  "Shoes",
  "Accessories",
  "Electronics",
  "Home Decor",
  "Fitness",
  "Beauty",
  "Gaming",
  "Books",
];

const MainMenu = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="pt-10  bg-white ">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">
              Popular Products
            </h1>
            <h3 className="text-sm text-gray-600">
              Don’t miss the latest offers valid till the end of this month.
            </h3>
          </div>

          {/* Tabs Section */}
          <div className="w-[60%]">
            <Box
              sx={{
                maxWidth: "100%",
                bgcolor: "background.paper",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons={isMobile ? false : "auto"} // hide buttons on small devices
                allowScrollButtonsMobile
                aria-label="product categories"
                sx={{
                  "& .MuiTab-root.Mui-selected": { color: "#ef4444" },
                  "& .MuiTabs-indicator": { backgroundColor: "#ef4444" },
                  "& .MuiTab-root": {
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "0.95rem",
                    minWidth: "auto",
                    px: 2,
                  },
                  "& .MuiTabs-scrollButtons": {
                    color: "#ef4444",
                    "&.Mui-disabled": { opacity: 0.3 },
                  },
                }}
              >
                {categories.map((cat, index) => (
                  <Tab key={index} label={cat} />
                ))}
              </Tabs>
            </Box>
          </div>
        </div>
        <div className="">
          <div className="container border border-red-400 rounded-lg py-6 px-8 flex flex-col sm:flex-row items-center justify-between gap-4 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 bg-white">
            {/* Left Section */}
            <div className="flex items-center gap-3">
              {/* Truck SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                width="42"
                height="42"
                className="transition-transform duration-500 group-hover:translate-x-2"
              >
                <path d="M3 3h13v10h-2v2h-2v-2H3V3zm13 2H5v6h11V5zm2 2h3l3 4v7h-2v2h-2v-2H5v2H3v-2H1v-7h17V7zm3 4-2-3h-1v3h3zm-2 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-14 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
              </svg>
              <span className="text-2xl font-bold text-gray-900 tracking-wide">
                FREE SHIPPING
              </span>
            </div>

            {/* Divider (for larger screens only) */}
            <div className="hidden sm:block w-px h-10 bg-gray-300"></div>

            {/* Center Text */}
            <div className="text-center text-lg text-gray-800 font-medium">
              Free Delivery Now On Your First Order and over{" "}
              <span className="font-semibold text-red-600">$200</span>
            </div>

            {/* Divider (for larger screens only) */}
            <div className="hidden sm:block w-px h-10 bg-gray-300"></div>

            {/* Right Section */}
            <div className="text-2xl font-extrabold text-gray-900">
              - ONLY <span className="text-red-600">$200*</span>
            </div>
          </div>
        </div>
        <BannerSlider slidesPerViewCount={3} />
        <Products category={categories[value]} />

        <DisplayBar />
        <div className="mt-10 font-semibold">
          <h2 className="text-xl">Latest Products</h2>
          <Products category={categories[value]} />
        </div>

        <BannerSlider slidesPerViewCount={2} />
         <DealOfTheDay />
      </div>
    </div>
  );
};

export default MainMenu;
