import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select a song</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}
            </p>
            <p>
                Duration: {song.duration}
            </p>
        </div>
    )
}

//connect to redux store and add selectedSong to props

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);