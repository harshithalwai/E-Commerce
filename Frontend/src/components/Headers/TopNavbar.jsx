import React, { useState, useEffect, useRef } from "react";
import { Loader } from "../index.js";
import { Link } from "react-router-dom";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
const TopNavbar = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef(null);

  // Fetch countries data
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,currencies,cca2,cca3"
        );
        const data = await response.json();

        // Sort countries alphabetically and set default to US
        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(sortedCountries);

        // Set default country (India)
        const defaultCountry = sortedCountries.find(
          (country) => country.cca2 === "IN"
        );
        if (defaultCountry) {
          setSelectedCountry(defaultCountry);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter countries based on search term
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get currency symbol
  const getCurrencySymbol = (country) => {
    if (country.currencies) {
      const currencyCode = Object.keys(country.currencies)[0];
      return country.currencies[currencyCode]?.symbol || currencyCode;
    }
    return "";
  };

  // Handle country selection
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="top-strip bg-white border-b-2 border-[rgba(0,0,0,0.1)] py-2 z-50">
      <div className="container mx-auto sm:px-6">
        <div className="flex justify-between items-center">
          <div className="col1 w-[60%] lg:w-auto z-50">
            <p className="font-medium text-xs sm:text-sm hidden lg:block">
              Get up to 30% off new season styles, limited time only !
            </p>
            <p className="font-bold block lg:hidden text-xs sm:text-sm truncate">
              <RocketLaunchIcon className="text-red-500" /> Free International
              Delivery !
            </p>
          </div>

          <div className="col2 flex items-center z-50">
            <ul className="z-50 flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
              <li className="!hidden sm:!block link text-[13px] ">
                <Link to="/help-center" className="">
                  Help <span className="!hidden !sm:inline-block">Center</span>
                </Link>
              </li>

              <div className="hz-line border bg-gray-400 !hidden lg:!block border-gray-400 w-[2px] h-[20px] "></div>

              <li className="!hidden sm:!block link text-[13px]">
                <Link to="/order-tracking" className="">
                  Order{" "}
                  <span className="!hidden !sm:inline-block">Tracking</span>
                </Link>
              </li>

              <div className="hz-line border bg-gray-400 !hidden lg:!block border-gray-400 w-[2px] h-[20px] "></div>

              {/* Country Dropdown - 3rd link (Flag + Name) */}
              <li className="lg:relative z-50" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-1 hover:bg-gray-100 px-2 py-1 rounded transition-colors"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="">
                      <Loader />
                    </span>
                  ) : selectedCountry ? (
                    <>
                      <img
                        src={selectedCountry.flags.svg}
                        alt={selectedCountry.name.common}
                        className="w-4 h-3 object-cover rounded-sm"
                      />
                      <span className="hidden sm:inline truncate">
                        {selectedCountry.name.common}
                      </span>
                    </>
                  ) : (
                    <span>Select Country</span>
                  )}
                  <svg
                    className={`w-3 h-3 transition-transform ml-1 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 lg:mt-1 mt-2 w-80 lg:max-w-[90vw]  bg-white border border-gray-200 lg:rounded-lg shadow-lg z-50 max-h-96 ">
                    {/* Search Input */}
                    <div className="p-3 border-b border-gray-100">
                      <div className="relative">
                        <svg
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                        <input
                          type="text"
                          placeholder="Search countries..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Country List */}
                    <div className="relative z-50 max-h-64 overflow-y-auto">
                      {filteredCountries.length === 0 ? (
                        <div className="p-3 text-center text-gray-500 text-sm">
                          No countries found
                        </div>
                      ) : (
                        filteredCountries.map((country) => (
                          <button
                            key={country.cca3}
                            onClick={() => handleCountrySelect(country)}
                            className="w-full px-3 py-2 hover:bg-gray-50 flex items-center space-x-3 text-left transition-colors"
                          >
                            <img
                              src={country.flags.svg}
                              alt={country.name.common}
                              className="w-5 h-4 object-cover rounded-sm flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-gray-900 truncate">
                                {country.name.common}
                              </div>
                              {country.name.official !==
                                country.name.common && (
                                <div className="text-xs text-gray-500 truncate">
                                  {country.name.official}
                                </div>
                              )}
                            </div>
                            <div className="text-sm font-medium text-gray-600 flex-shrink-0">
                              {getCurrencySymbol(country)}
                            </div>
                          </button>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </li>

              {/* Currency Symbol - 4th link */}
              <li>
                {loading ? (
                  <span className="">
                    <Loader />
                  </span>
                ) : selectedCountry ? (
                  <span className="font-medium px-2 py-1 bg-gray-100 rounded">
                    {getCurrencySymbol(selectedCountry)}
                  </span>
                ) : (
                  <span>-</span>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
