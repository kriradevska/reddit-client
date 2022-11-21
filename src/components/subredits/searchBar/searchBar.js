import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addSubreddit } from "../../../app/redditSlice";

import { FiSearch } from "react-icons/fi"; // for search icon


export const SearchBar = () => {

    const {subreddits} = useSelector((state) => state.subreddits)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addSubreddit());
    }, [])

    return (
        <form className="searchBar">
            <FiSearch style={{color: '#3D3D3D', marginRight: 10}} size='25px' />

            <input type="search" placeholder="Search Subreddits" style={{marginRight: 10}} />

            <button>Add</button>
        </form>
    )
}