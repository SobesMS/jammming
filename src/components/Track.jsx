import plus from '../assets/plus.svg';
import deleteCircle from '../assets/delete-circle.svg';
import './Track.css';

export default function Track(props) {
    let trackClass;
    let trackButton;

    if (props.isSearchResults) {
        trackClass = "track searchResults";
        trackButton = (
            <img src={plus} onClick={() => props.clickFunction(props.id)} alt="Add to playlist" />
        );
    } else {
        trackClass = "track playlist";
        trackButton = (
            <>
                <div>
                    {/* TODO - add up and down buttons to rearrange tracks*/ }
                </div>
                <div>
                    <img src={deleteCircle} onClick={() => props.clickFunction(props.id)} alt="Delete from playlist" />
                </div>
            </>
        );
    }

    return (
        <li className={trackClass}>
            <div className="songInfo">
                <p>{props.songName}</p>
                <p>{props.artist}&nbsp; | &nbsp;{props.album}</p>
            </div>
            <div>
                {trackButton}
            </div>
        </li>
    );
}