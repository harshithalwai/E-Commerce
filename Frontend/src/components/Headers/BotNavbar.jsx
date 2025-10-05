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

  const openCategoryPanel = () => {
    setIsOpenCatPanel((prev) => !prev);
  };

  const [avatarSrc, setAvatarSrc] = React.useState(undefined);
  const [navList, setNavList] = useState([
    "Home",
    "Fashion",
    "Electronics",
    "Bags",
    "Footwear",
    "Groceries",
    "Beauty",
    "Wellness",
    "Jewellery",
  ]);

  const handleAvatarChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      // Read the file as a data URL
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="bg-white">
        <div className="container py-3 flex items-center gap-2 sm:gap-5 text-sm font-semibold">
          <div className="flex-shrink-0">
            <ButtonBase
              onClick={openCategoryPanel}
              className="!px-1 flex items-center gap-1 sm:gap-2 text-sm font-semibold text-black !rounded-md hover:!text-[#ff5252] hover:bg-gray-200 transition-all duration-200 !min-w-fit"
              component="button"
            >
              <RiMenu2Fill className="text-sm font-semibold" />
              <span className="!py-2 !px-1  hidden sm:flex items-center gap-1">
                Shop By Category <IoIosArrowDown />
              </span>
              <span className="sm:hidden">Category</span>
            </ButtonBase>
          </div>

          {/* Vertical Divider */}
          <div className="w-[2px] bg-gray-300 h-6 hidden lg:block flex-shrink-0"></div>

          {/* Navigation Links - Scrollable */}
          <div className="flex-1 min-w-0">
            <div className="hidden sm:block  scrollbar-hide">
              <ul className="flex gap-3 sm:gap-6 text-gray-700 font-semibold whitespace-nowrap pb-1">
                {navList.map((item) => (
                  <li key={item} className="flex-shrink-0">
                    <ButtonBase
                      component={Link}
                      to={`/${item.toLowerCase()}`}
                      className="!px-2 !py-1 !rounded-md hover:bg-gray-200 transition-all duration-200 text-sm link "
                    >
                      {item}
                    </ButtonBase>
                  </li>
                ))}
                <li className="flex-shrink-0 relative menu">
                  <ButtonBase
                    component={Link}
                    to={`/offers}`}
                    className="!px-2 !py-1 !rounded-md hover:bg-gray-200 transition-all duration-200 text-sm link "
                  >
                    Offers
                  </ButtonBase>
                  <ul className="submenu absolute !bg-white shadow-md !text-black min-w-[100px] flex flex-col gap-2">
                    <li>
                      <Button
                        component={Link}
                        to="/fashion"
                        className="!w-full !capitalize hover:!text-[#ff5252] hover:!bg-white rounded-md !text-left  !font-[500] !text-[rgba(0,0,0,0.8)]"
                      >
                        Item 1
                      </Button>
                    </li>
                    <li className="relative item2">
                      <Button
                        component={Link}
                        to="/fashion"
                        className="!w-full !capitalize hover:!text-[#ff5252] hover:!bg-white rounded-md !text-left  !font-[500] !text-[rgba(0,0,0,0.8)]"
                      >
                        Item 2
                      </Button>
                      <ul className="innersubmenu absolute !bg-red-500 shadow-md !text-black min-w-[100px] flex flex-col gap-2">
                        <li>
                          <Button
                            component={Link}
                            to="/fashion"
                            className="!w-full !capitalize hover:!text-[#ff5252] hover:!bg-white rounded-md !text-left  !font-[500] !text-[rgba(0,0,0,0.8)]"
                          >
                            1
                          </Button>
                        </li>
                        <li>
                          <Button
                            component={Link}
                            to="/fashion"
                            className="!w-full !capitalize hover:!text-[#ff5252] hover:!bg-white rounded-md !text-left  !font-[500] !text-[rgba(0,0,0,0.8)]"
                          >
                            2
                          </Button>
                        </li>
                        <li>
                          <Button
                            component={Link}
                            to="/fashion"
                            className="!w-full !capitalize hover:!text-[#ff5252] hover:!bg-white rounded-md !text-left  !font-[500] !text-[rgba(0,0,0,0.8)]"
                          >
                            3
                          </Button>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Button
                        component={Link}
                        to="/fashion"
                        className="!w-full !capitalize hover:!text-[#ff5252] hover:!bg-white rounded-md !text-left  !font-[500] !text-[rgba(0,0,0,0.8)]"
                      >
                        Item 3
                      </Button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* User Profile Section */}
          <div className="flex-shrink-0">
            <div className="!text-black !text-sm !font-semibold hidden md:flex items-center gap-2 lg:gap-4 pr-2">
              <span className="hidden lg:inline whitespace-nowrap">
                Hi, Harshit!
              </span>
              <ButtonBase
                component="label"
                role={undefined}
                tabIndex={-1}
                aria-label="Avatar image"
                sx={{
                  borderRadius: "40px",
                  "&:has(:focus-visible)": {
                    outline: "2px solid",
                    outlineOffset: "2px",
                  },
                }}
              >
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

            {/* Mobile Avatar Only */}
            <div className="md:hidden">
              <ButtonBase
                component="label"
                role={undefined}
                tabIndex={-1}
                aria-label="Avatar image"
                sx={{
                  borderRadius: "40px",
                  "&:has(:focus-visible)": {
                    outline: "2px solid",
                    outlineOffset: "2px",
                  },
                }}
              >
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

        {/* Custom CSS for hiding scrollbar */}
        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <DrawerBox
          isOpenCatPanel={isOpenCatPanel}
          openCategoryPanel={openCategoryPanel}
        />
      </div>
    </>
  );
};

export default BotNavbar;
