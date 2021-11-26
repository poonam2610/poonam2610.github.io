import React, { useState } from 'react';
import "./SearchBar.scss";
import { FaSearch } from "react-icons/fa";
import * as ROUTES from "../../constants/Routes";
import { useHistory } from 'react-router';

function SearchBar() {
    const [searchItem, setSearchItem] = useState("");
    const history = useHistory();
    const handleKeyPress = (e) => {
        if (e.charCode === 13) {
            if (searchItem !== "") {
                history.push(`${ROUTES.SEARCH}/${searchItem}`);
            }
            setTimeout(()=>{setSearchItem("")}, 1000)
        }

    }
    return (
        <div className="searchBar__container">
            <FaSearch className="search__icon" />
            <input className="search__input" onKeyPress={handleKeyPress} type="text" name="search" id="search" value={searchItem} onChange={(e) => { setSearchItem(e.target.value) }} placeholder="What are you looking for ?" />
        </div>
    )
}

export default SearchBar
