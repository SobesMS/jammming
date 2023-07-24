import { useState } from 'react';
import './SearchResults-Playlist.css';

export default function Playlist({ tracklist }) {
    const [playlistName, setPlaylistName] = useState("New Playlist");
    const [isInputVisible, setIsInputVisible] = useState(false);

    return (
        <div className='tracklist'>
            <h3>{playlistName}</h3>
            <div className='playlistButtons'>
                {playlistName === "New Playlist" ? null : <button className='save'>Save to Spotify</button>}
                <button className='rename'>Rename Playlist</button>
            </div>
            <ul>{tracklist}</ul>
        </div>
    );

    /* const playlistNameChange = () => {
        if (isInputVisible) {
            setIsInputVisible(false);
        } else {
            setIsInputVisible(true);
        }
    }

    return (
        <div className='tracklist'>
            {isInputVisible ? <input type='text' id='nameInput' name='nameInput' placeholder={playlistName} /> : <h3>{playlistName}</h3>}
            <div className='playlistButtons'>
                {playlistName === "New Playlist" ? null : <button className='save'>Save to Spotify</button>}
                <button className='rename' onClick={playlistNameChange}>{isInputVisible ? "Save Playlist Name" : "Rename Playlist"}</button>
            </div>
            <ul>{tracklist}</ul>
        </div>
    ); */
}