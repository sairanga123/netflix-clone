import React from 'react';
import './Styles/index.scss'; 

class SearchSynopsis extends React.Component {
    constructor(props) { 
        super(props); 
            this.state = {
                searchInput: ""
            }; 
        
        this.returnDataBack = this.returnDataBack.bind(this);
    }

    setSearchInput(e) {
        this.setState({
            searchInput: e.target.value
        }); 

        console.log(e.target.value); 
    }

    searchForMovie() {
        let movieName = this.state.searchInput; 

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        let baseUrl = "https://api.themoviedb.org/3/search/movie?api_key="
        let apikey = "91c4b5829b393659456a5abdd7ef2772&"
        let additionalQuery = "language=en-US&query=" + movieName + "&page=1&include_adult=false"
          fetch(baseUrl+apikey+additionalQuery, requestOptions)
            .then(response => response.text())
            .then(result => this.returnDataBack(result))
            .catch(error => console.log('error', error));
    }

    returnDataBack(result) {
        let movieTitle = JSON.parse(result).results[0].original_title; 
        let movieOverview = JSON.parse(result).results[0].overview; 
        
        this.setState({
            movieTitle: movieTitle,
            movieOverview: movieOverview
        }); 
    }

    render() {
        return (
            <div id="SearchSynopsis">
                <label for="site-search">Search the site:</label>
                <input type="search" id="site-search" name="q" value={this.state.searchInput}
                    onChange={(e) => this.setSearchInput(e)}
                    aria-label="Search through site content"/>

                <button onClick={() => this.searchForMovie()}>Search</button>

                <div id="SearchSynopsis_results" style={{textAlign:"center"}}>
                    <p> Movie Title: {this.state.movieTitle} </p> 
                    <p> Movie Overview: {this.state.movieOverview} </p>
                </div>
            </div>
        )
    }

}

export default SearchSynopsis; 