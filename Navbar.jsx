import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Search for: ${searchTerm}`);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 z-50 transition-colors duration-500 ${
        scrolled ? "bg-black opacity-70" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="h-8 md:h-10 cursor-pointer"
      />

      {/* Nav Links */}
      <div className="hidden md:flex space-x-8 text-white font-medium">
        <a href="#" className="hover:text-red-600 transition">
          Home
        </a>
        <a href="#" className="hover:text-red-600 transition">
          TV Shows
        </a>
        <a href="#" className="hover:text-red-600 transition">
          Movies
        </a>
        <a href="#" className="hover:text-red-600 transition">
          My List
        </a>
      </div>

      {/* Search + User */}
      <div className="flex items-center space-x-4">
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`rounded-l-md px-3 py-1 w-32 md:w-48 focus:outline-none transition-colors duration-300 ${
              scrolled
                ? "bg-black text-black border border-gray-300 placeholder-gray-400"
                : "bg-transparent text-white border border-white placeholder-white"
            }`}
          />
          <button
            type="submit"
            aria-label="Search"
            className="bg-red-600 px-3 py-1 rounded-r-md hover:bg-red-700 transition flex items-center justify-center text-white"
          >
            <IoIosSearch size={20} />
          </button>
        </form>

        {/* User Avatar */}
        <img
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
          alt="User Avatar"
          className="h-10 w-10 rounded-md cursor-pointer"
          title="User Account"
        />
      </div>
    </nav>
  );
};

export default Navbar;


