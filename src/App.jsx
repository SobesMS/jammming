import { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Track from './components/Track';
import './App.css';

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const createTracklist = (songArr, isSearchResults, clickFunction) => {
    let tracklist = [];
    for (let i = 0; i < songArr.length; i++) {
        const song = songArr[i];
        tracklist.push(<Track key={song.id} id={song.id} songName={song.songName} artist={song.artist} album={song.album} isSearchResults={isSearchResults} clickFunction={clickFunction} />);
    }
    return tracklist;
}

  const addToPlaylist = id => {
    const songSearch = searchResults.find(obj => obj.id === id);
    if (songSearch != null) {
      const playlistSearch = playlist.find(obj => obj.id === id);
      if (playlistSearch == null) {
        setPlaylist([...playlist, songSearch]);
      }
    }
  }

  const removeFromPlaylist = id => {
    const indexOfSong = playlist.findIndex(obj => obj.id === id);
    if (indexOfSong !== -1) {
      const newPlaylist = playlist.toSpliced(indexOfSong, 1);
      setPlaylist(newPlaylist);
    }
  }

  return (
    <>
      <h1>Jammming</h1>
      <h2>Spotify Playlist Creator</h2>
      <div className='searchBarContainer'>
        <SearchBar setSearchResults={setSearchResults} setPlaylist={setPlaylist} />
      </div>
      <div className='tracklistContainer'>
        <SearchResults tracklist={createTracklist(searchResults, true, addToPlaylist)} />
        <Playlist tracklist={createTracklist(playlist, false, removeFromPlaylist)} />
      </div>
    </>
  );
}