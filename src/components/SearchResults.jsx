import Track from './Track';
import './SearchResults.css';

export default function SearchResults({ searchResults }) {
    const createTracklist = songArr => {
        let tracklist = [];
        for (let i = 0; i < songArr.length; i++) {
          const song = songArr[i];
          tracklist.push(<Track key={song.id} songName={song.songName} artist={song.artist} album={song.album} isSearchResults={true} />)
        }
        return tracklist;
      }

    return (
        <div>
            <ul>{createTracklist(searchResults)}</ul>
        </div>
    );
}