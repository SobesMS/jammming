import Track from "../components/Track";

export function createTracklist(songArr, isSearchResults) {
    let tracklist = [];
    for (let i = 0; i < songArr.length; i++) {
        const song = songArr[i];
        tracklist.push(<Track key={song.id} songName={song.songName} artist={song.artist} album={song.album} isSearchResults={isSearchResults} />)
    }
    return tracklist;
}

export function trackAddClick(id) {

}