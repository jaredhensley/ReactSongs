import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    render() {
        console.log(this.props);
        return <div>song list</div>
    }
}
const mapStateToProps = (state) => {
    // state represents the entire state
    return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);