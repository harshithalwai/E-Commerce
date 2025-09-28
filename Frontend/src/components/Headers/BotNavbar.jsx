import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import Button from "@mui/material/Button";
import { IoIosArrowDown } from "react-icons/io";

const BotNavbar = () => {
  return (
    <>
      <div className="container py-2 flex itemcenter gap-5 text-sm font-semibold ">
        <Button className="col1 w-[20%] flex items-start gap-2 sm:items-center !text-black !text-sm !font-semibold hover:bg-gray-200">
          <span className="cursor-pointer ">
            <RiMenu2Fill className="text-sm font-semibold" />
          </span>
          <span className="hidden w-full sm:flex sm:items-center sm:justify-between ">
            Shop By Category <IoIosArrowDown />
          </span>
        </Button>
        <div className="col2"></div>
        <div className="col3"></div>
      </div>
    </>
  );
};

export default BotNavbar;
