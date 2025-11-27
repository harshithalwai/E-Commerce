import React, { useState } from "react";
import {
  Breadcrumb,
  PriceRangeSlider,
  GridProductBox,
  ListProductBox,
} from "../../components/index.js";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import { FiMinusSquare } from "react-icons/fi";
import { FaRegSquarePlus } from "react-icons/fa6";

const ProductListing = () => {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const [filters, setFilters] = useState({});
  const [viewMode, setViewMode] = useState("grid");
  // 'grid' or 'list'
  const [sortBy, setSortBy] = useState("relevance");

  const toggleSubMenu = (index) =>
    setSubMenuIndex(index === subMenuIndex ? null : index);

  const handleCheckboxChange = (categoryName, optionValue) => {
    setFilters((prev) => {
      const categoryFilters = prev[categoryName] || [];
      const isChecked = categoryFilters.includes(optionValue);
      return {
        ...prev,
        [categoryName]: isChecked
          ? categoryFilters.filter((val) => val !== optionValue)
          : [...categoryFilters, optionValue],
      };
    });
  };

  const clearAllFilters = () => {
    setFilters({});
    setSubMenuIndex(null);
    console.log("All filters cleared!");
  };

  const categories = [
    {
      name: "Availability",
      submenu: [
        { label: "Available", count: 15, value: "available" },
        { label: "In Stock", count: 15, value: "in-stock" },
        { label: "Not Available", count: 1, value: "not-available" },
      ],
    },
    {
      name: "Size",
      submenu: [
        { label: "Small", count: 5, value: "small" },
        { label: "Medium", count: 5, value: "medium" },
        { label: "Large", count: 6, value: "large" },
        { label: "XXL", count: 2, value: "xxl" },
      ],
    },
    {
      name: "Color",
      submenu: [
        { label: "Grey", count: 4, value: "grey", color: "bg-gray-400" },
        { label: "Red", count: 3, value: "red", color: "bg-red-500" },
        { label: "Black", count: 3, value: "black", color: "bg-black" },
        { label: "Orange", count: 4, value: "orange", color: "bg-orange-500" },
        { label: "Blue", count: 5, value: "blue", color: "bg-blue-500" },
        { label: "Green", count: 5, value: "green", color: "bg-green-500" },
        { label: "Yellow", count: 3, value: "yellow", color: "bg-yellow-300" },
        { label: "Pink", count: 2, value: "pink", color: "bg-pink-400" },
      ],
    },
    {
      name: "Brand",
      submenu: [
        { label: "Gadget Zone", count: 2, value: "gadget-zone" },
        { label: "Initech Space", count: 2, value: "initech-space" },
        { label: "Looney Tunes", count: 2, value: "looney-tunes" },
        { label: "Massive Dynamic", count: 2, value: "massive-dynamic" },
        { label: "Pro Tech Gear", count: 2, value: "pro-tech-gear" },
        { label: "Soylent Green", count: 3, value: "soylent-green" },
        { label: "The Simpsons", count: 3, value: "the-simpsons" },
        { label: "Weeds Capital", count: 2, value: "weeds-capital" },
      ],
    },
    {
      name: "Condition",
      submenu: [
        { label: "New", count: 9, value: "new" },
        { label: "Refurbished", count: 3, value: "refurbished" },
        { label: "Used", count: 6, value: "used" },
      ],
    },
    {
      name: "Dimension",
      submenu: [
        { label: "60x90cm", count: 3, value: "60x90cm" },
        { label: "20x40cm", count: 3, value: "20x40cm" },
      ],
    },
  ];

  return (
    <div className="pt-4">
      <div className="container pb-4">
        <Breadcrumb />
      </div>

      <div className="bg-white">
        <div className="">
          <div className="min-h-screen p-6 flex gap-6">
            {/* Sidebar Filters */}
            <div className="w-1/4 max-h-screen overflow-y-auto bg-white rounded-lg p-6 shadow-sm scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-100 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-semibold">Filter By</h2>
                <button
                  onClick={clearAllFilters}
                  className="flex items-center gap-2 text-gray-600 text-sm hover:text-gray-800"
                >
                  <span>✖️</span> Clear All
                </button>
              </div>
              <div className="w-full h-[1.5px] bg-gray-500 mb-3"></div>

              <div className="flex-1">
                {categories.map((category, i) => (
                  <div
                    key={i}
                    className="rounded-lg transition-all overflow-hidden mb-2"
                  >
                    <div
                      className="flex items-center justify-between cursor-pointer px-4 py-3"
                      onClick={() => toggleSubMenu(i)}
                    >
                      <h3 className="font-semibold">{category.name}</h3>
                      {subMenuIndex === i ? (
                        <FiMinusSquare className="text-red-500" size={20} />
                      ) : (
                        <FaRegSquarePlus className="text-gray-500" size={20} />
                      )}
                    </div>

                    {subMenuIndex === i && (
                      <div className="px-4 py-2 animate-fadeIn">
                        {category.submenu.map((option) => (
                          <label
                            key={option.value}
                            className="flex items-center justify-between mb-2 cursor-pointer"
                          >
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                className="w-4 h-4"
                                checked={
                                  filters[category.name]?.includes(
                                    option.value
                                  ) || false
                                }
                                onChange={() =>
                                  handleCheckboxChange(
                                    category.name,
                                    option.value
                                  )
                                }
                              />
                              {option.color && (
                                <span
                                  className={`w-4 h-4 rounded-full border border-gray-300 ${option.color}`}
                                ></span>
                              )}
                              <span className="text-sm">{option.label}</span>
                            </div>
                            <span className="text-gray-400 text-sm">
                              ({option.count})
                            </span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <PriceRangeSlider />
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full h-full flex flex-col">
              <div className="pb-4">
                <h1 className="text-2xl font-bold mb-2">Smart Tablet</h1>
                <p className="text-gray-600 text-sm">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their.
                </p>
              </div>
              <div className="w-full h-[1.5px] bg-gray-500 mb-4"></div>

              <div className="w-full h-[1.5px] bg-gray-300 mb-4"></div>

              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6">
                {/* View Toggle & Product Count */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded transition-all ${
                        viewMode === "grid"
                          ? "bg-red-500 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                      title="Grid View"
                    >
                      <GridViewIcon fontSize="small" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded transition-all ${
                        viewMode === "list"
                          ? "bg-red-500 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                      title="List View"
                    >
                      <ViewListIcon fontSize="small" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">
                    There are 18 products.
                  </p>
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Sort by:
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="sales">Sales, highest to lowest</option>
                    <option value="name-asc">Name, A to Z</option>
                    <option value="name-desc">Name, Z to A</option>
                    <option value="price-asc">Price, low to high</option>
                    <option value="price-desc">Price, high to low</option>
                  </select>
                </div>
              </div>

              <div className="flex-1 max-h-screen overflow-y-auto">
                {viewMode === "grid" ? (
                  <div className="grid-cont">
                    {Array.from({ length: 18 }).map((_, idx) => (
                      <GridProductBox key={idx} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col">
                    {Array.from({ length: 18 }).map((_, idx) => (
                      <ListProductBox key={idx} />
                    ))}
                  </div>
                )}
              </div>

              <div className="w-full h-[30px] mt-5 flex items-center justify-between">
                <h3 className="text-sm text-gray-600">
                  Showing 1-18 of 18 items
                </h3>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300">
                    1
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300">
                    2
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300">
                    3
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
