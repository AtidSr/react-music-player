import React from 'react';
import LibrarySong from './LibrarySong'

const Library = ({songs, setCurrentSong, audioRef, setSongs, libraryStatus}) => {
    return(
        <div className={`library ${libraryStatus ? 'active-library' :''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => <LibrarySong songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong} song={song} key={song.id} audioRef={audioRef} />)}
            </div>
        </div>
    )
}

export default Library