import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import Button from "@mui/material/Button";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import ButtonBase from "@mui/material/ButtonBase";
import DrawerBox from "./DrawerBox";

const BotNavbar = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState(undefined);
  const [navList] = useState([
    "Home",
    "Fashion",
    "Electronics",
    "Categories",
    "Footwear",
    "Groceries",
    "Beauty",
    "Wellness",
    "Jewellery",
  ]);

  const categoriesData = [
    {
      title: "Electronics",
      subcategories: ["Laptop", "Mobile", "Tablet", "Watch"]
    },
    {
      title: "Fashion",
      subcategories: ["Purse", "Shoes", "T-Shirt", "Tote Bag"]
    },
    {
      title: "Furniture",
      subcategories: ["Bottle Grinder", "Pillow", "Poufs", "Sofas"]
    },
    {
      title: "Jewellery",
      subcategories: ["Diamond Cluster", "Drop Earrings", "Earrings", "Necklace"]
    },
    {
      title: "Retro Fashion",
      subcategories: ["Bucket Hat", "Denim Skirt", "Shimmer", "Tie-Dye"]
    },
    {
      title: "Watches",
      subcategories: ["Aviator Watches", "Goggles", "Hybrid Watches", "Smart Watches"]
    }
  ];

  const openCategoryPanel = () => setIsOpenCatPanel((prev) => !prev);

  const handleAvatarChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAvatarSrc(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="bg-white">
        <div className="container py-3 flex items-center gap-2 sm:gap-5 text-sm font-semibold">
          {/* Category Button */}
          <div className="flex-shrink-0">
            <ButtonBase
              onClick={openCategoryPanel}
              className="!px-1 flex items-center gap-1 sm:gap-2 text-sm font-semibold text-black !rounded-md hover:!text-[#ff5252] hover:bg-gray-200 transition-all duration-200 !min-w-fit"
            >
              <RiMenu2Fill className="text-sm font-semibold" />
              <span className="!py-2 !px-1 hidden sm:flex items-center gap-1">
                Shop By Category <IoIosArrowDown />
              </span>
              <span className="sm:hidden">Category</span>
            </ButtonBase>
          </div>

          {/* Vertical Divider */}
          <div className="w-[2px] bg-gray-300 h-6 hidden lg:block flex-shrink-0"></div>

          {/* Navigation Links */}
          <div className="flex-1 min-w-0">
            <div className="hidden sm:block scrollbar-hide relative">
              <ul className="flex gap-2 text-gray-700 font-semibold whitespace-nowrap pb-1">
                {navList.map((item) => (
                  <li key={item} className="link flex-shrink-0 relative group">
                    <ButtonBase
                      component={Link}
                      to={`/${item.toLowerCase()}`}
                      className="!font-semibold !px-2 !py-1 !rounded-md hover:bg-gray-200 hover:!text-[#ff5252] transition-all duration-200 text-sm flex items-center gap-1"
                    >
                      {item}
                    </ButtonBase>

                    {/* Mega Menu for Categories */}
                    {item === "Categories" && (
                      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                        <div className="bg-white shadow-xl rounded-md text-black p-6 grid grid-cols-3 gap-8 min-w-[700px]">
                          {categoriesData.map((category, index) => (
                            <div key={index}>
                              <h3 className="font-bold text-base mb-3 text-gray-900">
                                {category.title}
                              </h3>
                              <ul className="space-y-2">
                                {category.subcategories.map((subcat, subIndex) => (
                                  <li key={subIndex}>
                                    <Button
                                      component={Link}
                                      to={`/${category.title.toLowerCase()}/${subcat.toLowerCase().replace(/\s+/g, '-')}`}
                                      className="!w-full !justify-start !capitalize hover:!text-[#ff5252] hover:!bg-gray-50 !rounded-md !text-left !font-normal !text-gray-600 !px-2 !py-1.5 !text-sm"
                                    >
                                      {subcat}
                                    </Button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Fashion Submenu */}
                    {item === "Fashion" && (
                      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                        <ul className="bg-white shadow-lg rounded-md text-black min-w-[140px] flex flex-col p-1">
                          <li>
                            <Button
                              component={Link}
                              to="/fashion/item1"
                              className="!w-full !justify-start !capitalize hover:!text-[#ff5252] hover:!bg-gray-100 !rounded-md !text-left !font-[500] !text-[rgba(0,0,0,0.8)] !px-3 !py-2"
                            >
                              Item 1
                            </Button>
                          </li>
                          <li>
                            <Button
                              component={Link}
                              to="/fashion/item2"
                              className="!w-full !justify-start !capitalize hover:!text-[#ff5252] hover:!bg-gray-100 !rounded-md !text-left !font-[500] !text-[rgba(0,0,0,0.8)] !px-3 !py-2"
                            >
                              Item 2
                            </Button>
                          </li>
                          <li>
                            <Button
                              component={Link}
                              to="/fashion/item3"
                              className="!w-full !justify-start !capitalize hover:!text-[#ff5252] hover:!bg-gray-100 !rounded-md !text-left !font-[500] !text-[rgba(0,0,0,0.8)] !px-3 !py-2"
                            >
                              Item 3
                            </Button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* User Profile */}
          <div className="flex-shrink-0">
            <div className="!text-black !text-sm !font-semibold hidden md:flex items-center gap-2 lg:gap-4 pr-2">
              <span className="hidden lg:inline whitespace-nowrap">
                Hi, Harshit!
              </span>
              <ButtonBase component="label" sx={{ borderRadius: "40px" }}>
                <Avatar
                  alt="Upload new avatar"
                  src={avatarSrc}
                  sx={{ width: 32, height: 32 }}
                />
                <input
                  type="file"
                  accept="image/*"
                  style={{
                    border: 0,
                    clip: "rect(0 0 0 0)",
                    height: "1px",
                    margin: "-1px",
                    overflow: "hidden",
                    padding: 0,
                    position: "absolute",
                    whiteSpace: "nowrap",
                    width: "1px",
                  }}
                  onChange={handleAvatarChange}
                />
              </ButtonBase>
            </div>

            {/* Mobile Avatar */}
            <div className="md:hidden">
              <ButtonBase component="label" sx={{ borderRadius: "40px" }}>
                <Avatar
                  alt="Upload new avatar"
                  src={avatarSrc}
                  sx={{ width: 28, height: 28 }}
                />
                <input
                  type="file"
                  accept="image/*"
                  style={{
                    border: 0,
                    clip: "rect(0 0 0 0)",
                    height: "1px",
                    margin: "-1px",
                    overflow: "hidden",
                    padding: 0,
                    position: "absolute",
                    whiteSpace: "nowrap",
                    width: "1px",
                  }}
                  onChange={handleAvatarChange}
                />
              </ButtonBase>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollbar Hide */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Drawer */}
      <DrawerBox
        isOpenCatPanel={isOpenCatPanel}
        openCategoryPanel={openCategoryPanel}
      />
    </>
  );
};

export default BotNavbar;