import React from "react";
import { FiSearch } from "react-icons/fi";

export const SearchBar = () => {

    return (
        <form className="searchBar">
            <FiSearch style={{color: '#3D3D3D', marginRight: '10px', paddingTop: '8px'}} size='25px' />
            <input type="search" placeholder="Search Subreddits"/>
        </form>
    )
}