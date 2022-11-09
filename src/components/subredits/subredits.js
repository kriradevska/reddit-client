import React from "react";
import { SearchBar } from "./searchBar/searchBar";

export const Subredits = () => {

    return(
        <div className="subredits">
            <h2>Subreddits</h2>
            <div className="searchBar_container">
                <SearchBar />
            </div>
        </div>
    )
}