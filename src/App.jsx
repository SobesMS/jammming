import { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Track from './components/Track';
import './App.css';

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = id => {

  }

  return (
    <>
      <h1>Jammming</h1>
      <div className='searchBar'>
        <SearchBar setSearchResults={setSearchResults} setPlaylist={setPlaylist} />
      </div>
      <div className='tracklists'>
        <SearchResults searchResults={searchResults} />
        <Playlist playlist={playlist} />
      </div>
    </>
  );
}