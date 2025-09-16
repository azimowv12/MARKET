import { useState } from "react";
import { HeartIcon, ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { SiCoinmarketcap } from "react-icons/si";

export default function Navbar({ wishlistCount, cartCount, onSearch }) {
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
        onSearch?.(e.target.value);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md h-16 flex items-center z-50 ">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <SiCoinmarketcap className="text-3xl" />
                    <span className="text-xl font-bold">Market</span>
                </div>

                {/* Search Bar */}
                <div className="flex-1 mx-6">
                    <div className="relative w-full">
                        <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            value={search}
                            onChange={handleChange}
                            placeholder="Mahsulot qidiring..."
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>


                {/* Icons */}
                <div className="flex items-center space-x-6">
                    <div className="relative">
                        <HeartIcon className="h-7 w-7 text-gray-600" />
                        {wishlistCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                {wishlistCount}
                            </span>
                        )}
                    </div>

                    <div className="relative">
                        <ShoppingCartIcon className="h-7 w-7 text-gray-600" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </div>

                    <UserIcon className="h-7 w-7 text-gray-600" />
                </div>
            </div>
        </header>
    );
}
