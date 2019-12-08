import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClik = this.handleClick.bind(this);
    }

    handleChange(e) {
        var newName = e.target.value;
        this.props.onNameChange(newName);
    }

    handleClick() {
        this.props.onSave();
    }

    render() {
        return (
            <div className="Playlist">
                <input onChange={this.handleChange} value={this.props.name}/>
                <TrackList tracks={this.props.tracks} onRemove={this.props.onRemove} isRemoval={true} />
                <button className="Playlist-save" onClick={this.handleClick}>SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;