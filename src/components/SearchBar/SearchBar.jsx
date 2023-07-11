import { useState } from "react";
import './SearchBar.css';

function SearchBar() {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        setSearchResults([1,2,3]);
    }

    return (
        <div>
            <form>
                <input type="text" name="spotifySearch" placeholder="song name, artist, or album title" />
                <button type="button" onClick={handleSearch}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;
