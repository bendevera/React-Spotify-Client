import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "New Playlist",
      playlistTracks: []
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  addTrack(track) {
    console.log(track);
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      console.log("Already exists in playlistTracks");
      return;
    }
    const newPlaylist = this.state.playlistTracks.push(track)
    this.setState({
      playlistTracks: newPlaylist
    });
  }

  removeTrack(track) {
    const newPlaylist = this.state.playlistTracks.filter(item => {
      return item.id !== track.id;
    });
    console.log(newPlaylist);
    this.setState({
      playlistTracks: newPlaylist
    });
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    });
  }

  savePlaylist() {
    var trackUris = this.state.playlistTracks.map(track => {
      return track.uri;
    })
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults results={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} name={this.state.playlistName} tracks={this.state.playlistTracks} onRemove={this.removeTrack} />
          </div>
        </div>
      </div>      
    )
  }
}

export default App;
