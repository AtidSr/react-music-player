import React from 'react'
import {newSong} from '../util'

const LibrarySong = ({song, songs, setSongs, setCurrentSong, audioRef, isPlaying}) => {
    const songSelectHandler = async () => {
        const selectedSong = song
        await setCurrentSong(selectedSong)
        //Add active state
        const newSongs = newSong(songs, song)
        if (isPlaying) audioRef.current.play()
        setSongs(newSongs)
    }
    return (
        <div className={`library-song ${song.active ? 'selected' : ''}`} onClick={songSelectHandler}>
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;