import './App.css';
import SearchSynopsis from '../src/modules/SearchSynopsis/index.js';
import Row from './modules/Row/index.js';
import requests from './requests.js';
import Banner from '../src/modules/Banner/index.js';
import NavBar from '../src/modules/NavBar/index.js';

function App() {

  return (
    <div className="App">
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy TV Shows" fetchUrl={requests.fetchComedyTVShows} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
