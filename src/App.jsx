import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

function App() {

  return (
    <>
      <h1>Jammming</h1>
      <div className="card">
        <SearchBar />
      </div>
      <div>
        <SearchResults />
        <Playlist />
      </div>
    </>
  )
}

export default App;
