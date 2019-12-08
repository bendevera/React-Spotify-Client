import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.removeTrack(this.props.track);
    }

    render() {
        const actionAdd = <button className="Track-action" onClick={this.addTrack}>+</button>;
        const actionRemove = <button className="Track-action" onClick={this.removeTrack}>-</button>;
        const action = this.props.isRemoval ? actionRemove : actionAdd;
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {action}
                {/* <button className="Track-action" onClick={this.addTrack}>+</button>
                <button className="Track-action" onClick={this.removeTrack}>-</button> */}
            </div>
        )
    }
}

export default Track;