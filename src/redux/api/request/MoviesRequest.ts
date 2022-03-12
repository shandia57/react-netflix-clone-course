const MOVIES_REQUEST = {
    listPopular: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDA_API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    listAction: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDA_API_KEY}&with_genres=28`,
    listComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDA_API_KEY}&with_genres=35`,
    listFamily: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDA_API_KEY}&with_genres=14`,
    listHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDA_API_KEY}&with_genres=27`,
    listDrama: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDA_API_KEY}&with_genres=18`,
    listAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDA_API_KEY}&with_genres=16`,
    listWar: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDA_API_KEY}&with_genres=10752`,
}

export default MOVIES_REQUEST