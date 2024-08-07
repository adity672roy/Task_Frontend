import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="sm:w-80 w-40 flex items-center px-4 bg-slate-100 rounded-md">
      <input
        type="text"
        className="w-full text-xs bg-transparent py-[11px] outline-none"
        placeholder="Search "
        value={value}
        onChange={onChange}
      />

      {value && (
        <IoMdClose
          className="text-slate-400 text-xl mr-3 cursor-pointer hover:text-black"
          onClick={onClearSearch}
        />
      )}
      
      <FaMagnifyingGlass
        className="text-slate-400 cursor-pointer hover:text-black"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
