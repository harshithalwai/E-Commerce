import React, { useState, useContext } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { GiCrossMark } from "react-icons/gi";
import Box from "@mui/material/Box";
import StoreContext from "../context/storeContext/store.js";
import { Link } from "react-router-dom";
import ButtonBase from "@mui/material/ButtonBase";

// SINGLE ITEM COMPONENT
const CartItem = ({ img, name, size, price, oldPrice, qty, onChange }) => {
  return (
    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
      {/* PRODUCT IMAGE */}
      <img
        src={img}
        className="w-20 h-20 rounded-xl object-cover border border-gray-200"
        alt={name}
      />

      {/* PRODUCT CONTENT */}
      <div className="flex-1">
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs text-gray-500">{size}</p>

        <div className="flex items-center justify-between mt-2">
          {/* PRICE */}
          <div>
            <span className="font-bold text-base">₹{price}</span>
            {oldPrice && (
              <span className="text-xs text-gray-400 line-through ml-2">
                ₹{oldPrice}
              </span>
            )}
          </div>

          {/* QUANTITY BUTTONS */}
          <div className="flex items-center gap-1 border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => onChange(-1)}
              disabled={qty === 0}
              className="px-3 py-1 text-lg font-semibold transition-colors disabled:opacity-40"
              style={{ color: "#ff5252" }}
            >
              −
            </button>

            <span className="px-3 font-semibold">{qty}</span>

            <button
              onClick={() => onChange(1)}
              className="px-3 py-1 text-lg font-semibold transition-colors"
              style={{ color: "#ff5252" }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SwipableCartPanel() {
  const { openCartPanel, setOpenCartPanel } = useContext(StoreContext);

  // ITEMS STATE
  const [items, setItems] = useState({
    item1: {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=135/da/cms-assets/cms/product/ce0a0d4c-55a4-4ff1-b1d9-80ea7f05240b.jpg",
      name: "Amul Cow Milk",
      size: "500 ml",
      price: 29,
      qty: 1,
    },
    item: {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=135/da/cms-assets/cms/product/ce0a0d4c-55a4-4ff1-b1d9-80ea7f05240b.jpg",
      name: "Amul Cow Milk",
      size: "500 ml",
      price: 29,
      qty: 1,
    },
    item17: {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=135/da/cms-assets/cms/product/ce0a0d4c-55a4-4ff1-b1d9-80ea7f05240b.jpg",
      name: "Amul Cow Milk",
      size: "500 ml",
      price: 29,
      qty: 1,
    },
    item2: {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=135/da/cms-assets/cms/product/740e0dc4-565e-4e05-812d-d31f2ad27a4a.jpg",
      name: "Yojana Poultry White Eggs",
      size: "6 pieces",
      price: 57,
      oldPrice: 58,
      qty: 1,
    },
    item3: {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=135/da/cms-assets/cms/product/c76e129b-7ff6-46a1-92bb-fa98b3b8c5db.jpg",
      name: "Yojana Poultry White Eggs",
      size: "12 pieces",
      price: 111,
      oldPrice: 116,
      qty: 1,
    },
  });

  // UPDATE QUANTITY
  const updateQuantity = (key, change) => {
    setItems((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        qty: Math.max(0, prev[key].qty + change),
      },
    }));
  };

  // TOTALS
  const itemsTotal = Object.values(items).reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  const delivery = 30;
  const handling = 11;
  const grandTotal = itemsTotal + delivery + handling;

  return (
    <>
      <SwipeableDrawer
        anchor="right"
        open={openCartPanel}
        onClose={() => setOpenCartPanel(false)}
        onOpen={() => setOpenCartPanel(true)}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: 420 },
            backgroundColor: "#fff",
          },
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            p: 2.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #eee",
          }}
        >
          <h2 className="text-xl font-bold text-[#ff5252]">Shopping Cart</h2>

          <IconButton onClick={() => setOpenCartPanel(false)} size="small">
            <GiCrossMark size={20} className="text-[#ff5252]" />
          </IconButton>
        </Box>

        {/* ITEMS LIST */}
        <Box sx={{ p: 2, overflowY: "auto", flex: 1 }}>
          {Object.entries(items).map(([key, item]) => (
            <CartItem
              key={key}
              {...item}
              onChange={(c) => updateQuantity(key, c)}
            />
          ))}
        </Box>

        <Divider />

        {/* BILLING SECTION */}
        <Box sx={{ p: 2, backgroundColor: "#fafafa" }}>
          <h3 className="font-bold mb-3 text-base">Bill Details</h3>

          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Items Total</span>
            <span className="font-semibold">₹{itemsTotal}</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Delivery Charge</span>
            <span className="font-semibold">₹{delivery}</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Handling Charge</span>
            <span className="font-semibold">₹{handling}</span>
          </div>

          <Divider sx={{ my: 2 }} />

          <div className="flex justify-between font-bold text-base">
            <span>Grand Total</span>
            <span>₹{grandTotal}</span>
          </div>
        </Box>

        {/* FOOTER CHECKOUT */}
        <Box
          className="flex gap-2"
          sx={{
            p: 2,
            borderTop: "1px solid #eee",
            position: "sticky",
            bottom: 0,
            backgroundColor: "#fff",
          }}
        >
          <ButtonBase
            component={Link}
            to="/cart"
            onClick={()=>{
              setOpenCartPanel(false)
            }}
            className="!w-full !py-3 !text-white !font-semibold !rounded-lg !shadow-md !hover:shadow-lg !transition-all"
            style={{ backgroundColor: "#ff5252" }}
          >
            View Cart
          </ButtonBase>
          <button
            className="w-full py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            style={{ backgroundColor: "#ff5252" }}
          >
            Checkout • ₹{grandTotal}
          </button>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
