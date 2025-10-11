import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "./MainMenu.css";
import { Products } from "../index.js";

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
    <div className="pt-10 pb-20 bg-white ">
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
        <Products category={categories[value]} />
      </div>
    </div>
  );
};

export default MainMenu;
