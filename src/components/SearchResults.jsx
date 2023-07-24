import './SearchResults-Playlist.css';

export default function SearchResults({ tracklist }) {
    return (
        <div className='tracklist'>
            <h3>Search Results</h3>
            <ul>{tracklist}</ul>
        </div>
    );
}