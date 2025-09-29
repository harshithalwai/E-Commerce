import { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { FaRegSquarePlus } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { GiCrossMark } from "react-icons/gi";
import "./style.css";
import { Link } from "react-router-dom";
import { FiMinusSquare } from "react-icons/fi";

const DrawerBox = ({ isOpenCatPanel, openCategoryPanel }) => {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const [innerSubMenuIndex, setInnerSubMenuIndex] = useState(null);
  const openSubMenu = (index) => {
    setSubMenuIndex(index === subMenuIndex ? null : index);
  };
  const openInnerSubMenu = (index) => {
    setInnerSubMenuIndex(index === innerSubMenuIndex ? null : index);
  };
  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" className="category-panel">
      {/* Header with Close Icon */}
      <div className="text-sm font-bold p-4 px-6 border-b border-gray-300 flex items-center justify-between">
        <h3>Shop By Category !</h3>
        <button
          className="cursor-pointer hover:scale-75 transition duration-100 text-[#ff5252] text-lg"
          onClick={openCategoryPanel}
        >
          <GiCrossMark />
        </button>
      </div>

      {/* Scrollable List */}
      <div className="scroll mt-4 h-[80vh] overflow-y-auto">
        <ul className="w-full px-2">
          <li className="list-none flex items-center relative !font-semibold">
            <Button
              onClick={() => {
                openSubMenu(0);
              }}
              component={Link}
              to="/fashion"
              className="w-full !text-left !font-[500] !justify-start !px-3 !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] hover:!bg-gray-200 rounded-md transition-all duration-200"
            >
              Fashion
            </Button>
            {subMenuIndex == 0 ? (
              <FiMinusSquare
                className="cursor-pointer absolute top-[10px] right-[15px]"
                onClick={() => {
                  openSubMenu(0);
                }}
              />
            ) : (
              <FaRegSquarePlus
                onClick={() => {
                  openSubMenu(0);
                }}
                className="cursor-pointer absolute top-[10px] right-[15px]"
              />
            )}

            {subMenuIndex == 0 && (
              <ul className="submenu absolute top-[100%] left-[0%] w-full pl-3">
                <li className="list-none flex items-center relative !font-semibold">
                  <Button
                    onClick={() => {
                      openInnerSubMenu(0);
                    }}
                    component={Link}
                    to="/fashion"
                    className="hover:!text-[#ff5252] hover:bg-gray-200 rounded-md transition-all duration-200 w-full !text-left !font-[500] !justify-start !px-3 !text-[rgba(0,0,0,0.8)]"
                  >
                    Fashion Items
                  </Button>
                  {innerSubMenuIndex == 0 ? (
                    <FiMinusSquare
                      className="cursor-pointer absolute top-[10px] right-[15px]"
                      onClick={() => {
                        openInnerSubMenu(0);
                      }}
                    />
                  ) : (
                    <FaRegSquarePlus
                      onClick={() => {
                        openInnerSubMenu(0);
                      }}
                      className="cursor-pointer absolute top-[10px] right-[15px]"
                    />
                  )}

                  {innerSubMenuIndex == 0 && (
                    <ul className="inner-submenu absolute top-[100%] left-[0%] w-full pl-3">
                      <li className="list-none flex items-center relative !font-semibold">
                        <Button
                          component={Link}
                          to="/fashion"
                          className="!capitalize hover:!text-[#ff5252] hover:bg-gray-200 rounded-md transition-all duration-200 w-full !text-left !font-[500] !justify-start !px-3 !text-[rgba(0,0,0,0.8)]"
                        >
                          Item
                        </Button>
                      </li>
                      <li className="list-none flex items-center relative !font-semibold">
                        <Button
                          component={Link}
                          to="/fashion"
                          className="!capitalize hover:!text-[#ff5252] hover:bg-gray-200 rounded-md transition-all duration-200 w-full !text-left !font-[500] !justify-start !px-3 !text-[rgba(0,0,0,0.8)]"
                        >
                          Item
                        </Button>
                      </li>
                      <li className="list-none flex items-center relative !font-semibold">
                        <Button
                          component={Link}
                          to="/fashion"
                          className="!capitalize hover:!text-[#ff5252] hover:bg-gray-200 rounded-md transition-all duration-200 w-full !text-left !font-[500] !justify-start !px-3 !text-[rgba(0,0,0,0.8)]"
                        >
                          Item
                        </Button>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <SwipeableDrawer
      open={isOpenCatPanel}
      onClose={openCategoryPanel} // works when backdrop or swipe closes
      onOpen={openCategoryPanel} // works when user swipes to open
    >
      {DrawerList}
    </SwipeableDrawer>
  );
};

export default DrawerBox;
