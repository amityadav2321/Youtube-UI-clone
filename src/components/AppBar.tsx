import { FaBars, FaPlus, FaBell } from "react-icons/fa";
import { SearchBar } from "./Searchbar";

export const AppBar = () => {
    return (
        <div className="sticky top-0 z-50 flex justify-between items-center px-4 py-2 bg-black text-white shadow-md border-b border-zinc-800">
            {/* Left: Menu + Logo + YouTube IN */}
            <div className="flex items-center space-x-4">
                <button type="button" aria-label="Menu">
                    <FaBars className="hover:text-gray-300 transition" />
                </button>
                <a href="/" className="flex items-center space-x-2">
                    <img src="/image.png" alt="YouTube Logo" className="h-6 w-auto" />
                    <div className="flex items-center font-semibold text-lg">
                        <span>YouTube</span>
                        <sup className="text-xs text-gray-400 ml-0.5">IN</sup>
                    </div>
                </a>
            </div>

            {/* Center: Search Bar (hidden on small screens) */}
            <div className="hidden md:flex">
                <SearchBar />
            </div>

            {/* Right: Action Buttons */}
            <div className="flex items-center space-x-4">
                <button
                    type="button"
                    className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-full flex items-center space-x-2 transition"
                    aria-label="Create"
                >
                    <FaPlus />
                    <span>Create</span>
                </button>

                {/* Bell with Tooltip */}
                <div className="relative group">
                    <button type="button" aria-label="Notifications">
                        <FaBell />
                        <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full px-1.5">
                            9+
                        </span>
                    </button>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-gray-700 text-xs px-2 py-1 rounded">
                        Notifications
                    </div>
                </div>

                {/* Profile Avatar (replace with user profile image if available) */}
                <div className="bg-zinc-600 w-8 h-8 rounded-full flex items-center justify-center">
                    A
                </div>
            </div>
        </div>
    );
};
