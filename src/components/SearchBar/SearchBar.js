import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSearch() {
        this.props.onSearch(this.state.term);
    }

    handleChange(e) {
        const newTerm = e.target.value;
        this.setState({
            term: newTerm
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.handleChange} placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton"onClick={this.handleSearch}>SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;