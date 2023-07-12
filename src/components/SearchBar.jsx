import { useState } from "react";
import './SearchBar.css';

export default function SearchBar({ setSearchResults }) {
    const tempSpotifyList = [
        {id: 1, songName: "I Was Wrong", artist: "Social Distortion", album: "White Light, White Heat, White Trash"},
        {id: 2, songName: "Look What Happened", artist: "Less Than Jake", album: "Borders & Boundries"},
        {id: 3, songName: "Evenflow", artist: "Pearl Jam", album: "Ten"}
    ];

    const [searchString, setSearchString] = useState("");

    const spotifySearch = e => {
        e.preventDefault();
        setSearchResults(tempSpotifyList);
    };

    return (
        <>
            <form onSubmit={spotifySearch}>
                <input type="text" name="searchInput" value={searchString} onChange={e => setSearchString(e.target.value)} placeholder="enter a song, artist, or album" />
                <button type="submit">Search</button>
            </form>
        </>
    );
}