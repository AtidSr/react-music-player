export const playAudio = (isPlaying, audioRef) => {
            //Check if the song is playing
        if(isPlaying) {
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined) {
                playPromise.then(audio => {
                    audioRef.current.play()
                }).catch(error => {
                    // Auto-play was prevented
                    // Show paused UI.
                    console.log(error);
                  });
            }
        }
}

export const newSong = (songs, song) => {
    
     return songs.map((loopSong) => {
        if(loopSong.id === song.id) {
            return {
                ...loopSong,
                active: true
            }
        }else return {...loopSong, active:false}
    })

}