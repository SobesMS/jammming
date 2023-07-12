import plus from '../assets/plus.svg';
import deleteCircle from '../assets/delete-circle.svg';
import './Track.css';

export default function Track(props) {
    let trackButton;

    function addToPlaylist() {

    }

    function removeFromPlaylist() {

    }

    if (props.isSearchResults) {
        trackButton = (
            <img src={plus} alt="Add to playlist" />
        );
    } else {
        trackButton = (
            <img src={deleteCircle} alt="Delete from playlist" />
        );
    }

    return (
        <li key={props.id}>
            <div>
                <p>{props.songName}</p>
                <p>{props.artist}&nbsp; | &nbsp;{props.album}</p>
            </div>
            <div>
                {trackButton}
            </div>
        </li>
    );
}