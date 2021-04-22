import React from 'react';
import "./SearchBar.scss";
import { FaSearch} from "react-icons/fa";

function SearchBar() {
    return (
        <div className="searchBar__container">
            <FaSearch className="search__icon" />
            <input className="search__input" type="text" name="search" id="search" placeholder="What are you looking for ?"/>
        </div>
    )
}

export default SearchBar
