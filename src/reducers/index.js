import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Hey Jude', duration: '4:05' },
        { title: 'All Star', duration: '5:11' },
        { title: 'Miami', duration: '3:57' },
        { title: 'I Want it That Way', duration: '1:45' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    } 

    return selectedSong;
}

export default combineReducers({ 
    songs: songsReducer, 
    selectedSong: selectedSongReducer 
});

