import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import Button from "@mui/material/Button";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import ButtonBase from "@mui/material/ButtonBase";
const BotNavbar = () => {
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
      <div className="container py-3 flex itemcenter gap-5 text-sm font-semibold ">
        <Button className="col1 w-[20%] flex items-start gap-1 sm:gap-2 sm:items-center !text-black !text-sm !font-semibold hover:bg-gray-200">
          <span className="cursor-pointer ">
            <RiMenu2Fill className="text-sm font-semibold" />
          </span>
          <span className="hidden w-full sm:flex sm:items-center sm:justify-between ">
            Shop By Category <IoIosArrowDown />
          </span>
          <span className="sm:hidden w-full ">Category!</span>
        </Button>

        <div className="col2 flex w-[67%]">
          <ul className="hidden sm:flex gap-6 text-gray-700  sm:items-center font-semibold">
            {navList.map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`} className="link">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="!text-black !text-sm !font-semibold col3 w-full sm:w-[13%] flex items-center gap-4 justify-end pr-2 ">
          Hii , {"Harshit"} ! 
          <ButtonBase
            component="label"
            role={undefined}
            tabIndex={-1} // prevent label from tab focus
            aria-label="Avatar image"
            sx={{
              borderRadius: "40px",
              "&:has(:focus-visible)": {
                outline: "2px solid",
                outlineOffset: "2px",
              },
            }}
          >
            <Avatar alt="Upload new avatar" src={avatarSrc} />
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
    </>
  );
};

export default BotNavbar;
