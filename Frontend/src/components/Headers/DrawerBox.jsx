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
    setInnerSubMenuIndex(null); // reset inner submenu when switching
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
          {/* Main Menu Item */}
          <li className="list-none flex flex-col !font-semibold">
            <div className="flex items-center relative">
              <Button
                onClick={() => openSubMenu(0)}
                component={Link}
                to="/fashion"
                className="w-full !text-left !font-[500] !justify-start !px-3 !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] hover:!bg-gray-200 rounded-md transition-all duration-200"
              >
                Fashion
              </Button>

              {subMenuIndex === 0 ? (
                <FiMinusSquare
                  className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-[15px]"
                  onClick={() => openSubMenu(0)}
                />
              ) : (
                <FaRegSquarePlus
                  className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-[15px]"
                  onClick={() => openSubMenu(0)}
                />
              )}
            </div>

            {/* Submenu */}
            {subMenuIndex === 0 && (
              <ul className="submenu w-full pl-4 mt-2 flex flex-col gap-2">
                {/* Submenu Item 1 */}
                <li className="list-none flex flex-col !font-semibold">
                  <div className="flex items-center relative">
                    <Button
                      onClick={() => openInnerSubMenu(0)}
                      component={Link}
                      to="/fashion"
                      className="hover:!text-[#ff5252] hover:bg-gray-200 rounded-md transition-all duration-200 w-full !text-left !font-[500] !justify-start !px-3 !text-[rgba(0,0,0,0.8)]"
                    >
                      Fashion Items
                    </Button>

                    {innerSubMenuIndex === 0 ? (
                      <FiMinusSquare
                        className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-[15px]"
                        onClick={() => openInnerSubMenu(0)}
                      />
                    ) : (
                      <FaRegSquarePlus
                        className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-[15px]"
                        onClick={() => openInnerSubMenu(0)}
                      />
                    )}
                  </div>

                  {/* Inner Submenu */}
                  {innerSubMenuIndex === 0 && (
                    <ul className="inner-submenu w-full pl-4 mt-2 flex flex-col gap-2">
                      <li>
                        <Button
                          component={Link}
                          to="/fashion"
                          className="!capitalize hover:!text-[#ff5252] hover:bg-gray-200 rounded-md text-left !px-3 !font-[500] !text-[rgba(0,0,0,0.8)]"
                        >
                          Item 1
                        </Button>
                      </li>
                      <li>
                        <Button
                          component={Link}
                          to="/fashion"
                          className="!capitalize hover:!text-[#ff5252] hover:bg-gray-200 rounded-md  text-left !px-3 !font-[500] !text-[rgba(0,0,0,0.8)]"
                        >
                          Item 2
                        </Button>
                      </li>
                      <li>
                        <Button
                          component={Link}
                          to="/fashion"
                          className="!capitalize hover:!text-[#ff5252] hover:bg-gray-200 rounded-md  text-left !px-3 !font-[500] !text-[rgba(0,0,0,0.8)]"
                        >
                          Item 3
                        </Button>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Submenu Item 2 */}
                <li className="list-none flex flex-col !font-semibold">
                  <div className="flex items-center relative">
                    <Button
                      onClick={() => openInnerSubMenu(1)}
                      component={Link}
                      to="/fashion"
                      className="hover:!text-[#ff5252] hover:bg-gray-200 rounded-md transition-all duration-200 w-full !text-left !font-[500] !justify-start !px-3 !text-[rgba(0,0,0,0.8)]"
                    >
                      Diamonds
                    </Button>

                    {innerSubMenuIndex === 1 ? (
                      <FiMinusSquare
                        className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-[15px]"
                        onClick={() => openInnerSubMenu(1)}
                      />
                    ) : (
                      <FaRegSquarePlus
                        className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-[15px]"
                        onClick={() => openInnerSubMenu(1)}
                      />
                    )}
                  </div>

                  {/* Inner Submenu */}
                  {innerSubMenuIndex === 1 && (
                    <ul className="inner-submenu w-full pl-4 mt-2 flex flex-col gap-2">
                      <li>
                        <Button
                          component={Link}
                          to="/fashion"
                          className="!capitalize hover:!text-[#ff5252] hover:bg-gray-200 rounded-md  text-left !px-3 !font-[500] !text-[rgba(0,0,0,0.8)]"
                        >
                          Item 1
                        </Button>
                      </li>
                      <li>
                        <Button
                          component={Link}
                          to="/fashion"
                          className="!capitalize hover:!text-[#ff5252] hover:bg-gray-200 rounded-md text-left !px-3 !font-[500] !text-[rgba(0,0,0,0.8)]"
                        >
                          Item 2
                        </Button>
                      </li>
                      <li>
                        <Button
                          component={Link}
                          to="/fashion"
                          className="!capitalize hover:!text-[#ff5252] hover:bg-gray-200 rounded-md  text-left !px-3 !font-[500] !text-[rgba(0,0,0,0.8)]"
                        >
                          Item 3
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
