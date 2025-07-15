import { FaSearch, FaMicrophone } from "react-icons/fa";

export const SearchBar = () => {
    return (
        <div className="flex items-center">
            <div className="flex items-center bg-zinc-900 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-zinc-900 text-white px-4 py-2 w-48 md:w-80 outline-none"
                />
                <button
                    type="button"
                    className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 transition-colors duration-200"
                    aria-label="Search"
                >
                    <FaSearch />
                </button>
            </div>
            <button
                type="button"
                className="ml-4 bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full transition"
                aria-label="Voice Search"
            >
                <FaMicrophone />
            </button>
        </div>
    );
};
