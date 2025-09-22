import { useState } from "react";
import { HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { SiCoinmarketcap } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Navbar({ wishlistCount, cartCount, onSearch }) {

  const { t, i18n } = useTranslation()
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    onSearch?.(e.target.value);
  };

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      html.classList.add("dark");
      localStorage.theme = "dark";
    }
    setDarkMode(!darkMode);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md h-16 flex items-center z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <SiCoinmarketcap className="text-3xl text-gray-900 dark:text-white" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Market
          </span>
        </div>

        {/* SEARCH */}
        <div className="flex-1 mx-6">
          <div className="relative w-full">
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-300" />
            <input
              type="text"
              value={search}
              onChange={handleChange}
              placeholder={t("search.placeholder")}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        {/* ICONS */}
        <div className="flex items-center space-x-6">
          <Link to="/saved" className="relative">
            <HeartIcon className="h-7 w-7 text-gray-600 dark:text-gray-300 cursor-pointer" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link to="/korzinka" className="relative">
            <ShoppingCartIcon className="h-7 w-7 text-gray-600 dark:text-gray-300 cursor-pointer" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>


          {/* DARK MODE TOGGLE */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-400" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-800" />
            )}
          </button>
          <div className=" ">
            <select
              onChange={handleLanguageChange}
              value={i18n.language}
              className="border rounded p-1 dark:text-white "
            >
              <option value="uz" >O'zbekcha</option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
