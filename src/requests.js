const API_KEY = "91c4b5829b393659456a5abdd7ef2772";

const requests = {
    fetchTrending: `discover/tv?api_key=${API_KEY}&with_networks=213&with_original_language=hi`,
    fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213&with_original_language=en`,
    fetchTopRated: `/tv/top_rated/?api_key=${API_KEY}&language=en-US&with_networks=213`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&with_networks=213`,
    fetchComedyTVShows: `/discover/tv?api_key=${API_KEY}&with_genres=35&with_networks=213`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&with_networks=213`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&with_networks=213`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99&with_networks=213`
};

export default requests; 