import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import Button from "@mui/material/Button";
import { IoIosArrowDown } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import ButtonBase from "@mui/material/ButtonBase";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { FaRegSquarePlus } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import { FiMinusSquare } from "react-icons/fi";

// DrawerBox Component
const DrawerBox = ({ isOpenCatPanel, openCategoryPanel }) => {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const [innerSubMenuIndex, setInnerSubMenuIndex] = useState(null);

  const openSubMenu = (index) => {
    setSubMenuIndex(index === subMenuIndex ? null : index);
    setInnerSubMenuIndex(null);
  };

  const openInnerSubMenu = (index) => {
    setInnerSubMenuIndex(index === innerSubMenuIndex ? null : index);
  };

  const categories = [
    {
      name: "Fashion",
      submenu: [
        {
          name: "Fashion Items",
          items: ["Item 1", "Item 2", "Item 3"],
        },
        {
          name: "Diamonds",
          items: ["Diamond Ring", "Diamond Necklace", "Diamond Earrings"],
        },
      ],
    },
    {
      name: "Electronics",
      submenu: [
        {
          name: "Mobile Phones",
          items: ["Smartphones", "Feature Phones", "Accessories"],
        },
        {
          name: "Laptops",
          items: ["Gaming", "Business", "Ultrabooks"],
        },
      ],
    },
    {
      name: "Home & Kitchen",
      submenu: [
        {
          name: "Appliances",
          items: ["Refrigerators", "Washing Machines", "Microwaves"],
        },
      ],
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 320 }} role="presentation" className="bg-white h-full">
      {/* Header */}
      <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-5 flex items-center justify-between shadow-lg z-10">
        <h3 className="text-lg font-bold">Shop By Category</h3>
        <button
          className="cursor-pointer hover:rotate-90 transition-transform duration-300 text-white hover:text-red-400"
          onClick={openCategoryPanel}
        >
          <GiCrossMark size={20} />
        </button>
      </div>

      {/* Scrollable List */}
      <div className="h-[calc(100vh-80px)] overflow-y-auto p-4">
        <ul className="w-full space-y-2">
          {categories.map((category, categoryIndex) => (
            <li key={categoryIndex} className="list-none">
              <div className="flex items-center relative bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                <Button
                  onClick={() => openSubMenu(categoryIndex)}
                  className="!w-full !text-left !font-semibold !justify-start !px-4 !py-3 !text-gray-800 hover:!text-red-500 !capitalize"
                >
                  {category.name}
                </Button>

                {subMenuIndex === categoryIndex ? (
                  <FiMinusSquare
                    className="cursor-pointer absolute right-4 text-red-500"
                    size={20}
                    onClick={() => openSubMenu(categoryIndex)}
                  />
                ) : (
                  <FaRegSquarePlus
                    className="cursor-pointer absolute right-4 text-gray-500"
                    size={20}
                    onClick={() => openSubMenu(categoryIndex)}
                  />
                )}
              </div>

              {/* Submenu */}
              {subMenuIndex === categoryIndex && (
                <ul className="w-full pl-4 mt-2 space-y-2 animate-fadeIn">
                  {category.submenu.map((sub, subIndex) => (
                    <li key={subIndex} className=" list-none">
                      <div className="flex items-center relative bg-white rounded-lg border border-gray-200 hover:border-red-300 transition-all">
                        <Button
                          onClick={() => openInnerSubMenu(subIndex)}
                          className="!w-full !text-left !font-medium !justify-start !px-4 !py-2 !text-gray-700 hover:!text-red-500 !capitalize"
                        >
                          {sub.name}
                        </Button>

                        {innerSubMenuIndex === subIndex ? (
                          <FiMinusSquare
                            className="cursor-pointer absolute right-4 text-red-500"
                            size={18}
                            onClick={() => openInnerSubMenu(subIndex)}
                          />
                        ) : (
                          <FaRegSquarePlus
                            className="cursor-pointer absolute right-4 text-gray-400"
                            size={18}
                            onClick={() => openInnerSubMenu(subIndex)}
                          />
                        )}
                      </div>

                      {/* Inner Submenu */}
                      {innerSubMenuIndex === subIndex && (
                        <ul className="w-full  mt-2 space-y-1 animate-fadeIn">
                          {sub.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Button
                                onClick={() =>
                                  console.log(`Navigate to: ${item}`)
                                }
                                className="!w-full !text-left !capitalize hover:!text-red-500 hover:!bg-red-50 !rounded-lg  !py-2 !font-normal !text-gray-600 transition-all"
                              >
                                {item}
                              </Button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </Box>
  );

  return (
    <SwipeableDrawer
      open={isOpenCatPanel}
      onClose={openCategoryPanel}
      onOpen={openCategoryPanel}
    >
      {DrawerList}
    </SwipeableDrawer>
  );
};

export default DrawerBox;
