import { useState } from "react";
import { testSongList } from "../utils/testData";
import './SearchBar.css';

export default function SearchBar({ setSearchResults }) {
    const [searchString, setSearchString] = useState("");
    const [isSearchEmpty, setIsSearchEmpty] = useState(true);

    const spotifySearch = e => {
        e.preventDefault();
        if (searchString !== "") {
            // TODO - need to build spotify search
            setSearchResults(testSongList);
            setIsSearchEmpty(false);
        } 
    };

    const clearSearch = () => {
        document.getElementById("searchInput").value = "";
        setSearchString("");
        setSearchResults([]);
        setIsSearchEmpty(true);
    }

    return (
        <>
            <form onSubmit={spotifySearch}>
                <input type="text" id="searchInput" name="searchInput" place={searchString} onChange={e => setSearchString(e.target.value)} placeholder="enter a song, artist, or album" />
                <button className="search" type="submit">Search Spotify</button>
                {isSearchEmpty == false ? <button className="clear" type="button" onClick={clearSearch}>Clear Search</button> : null}
            </form>
        </>
    );
}