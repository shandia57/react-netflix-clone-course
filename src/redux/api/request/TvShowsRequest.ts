const TVSHOWS_REQUEST = {
    listPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDA_API_KEY}&language=fr-FR&page1`,
    listAnimation: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDA_API_KEY}&with_genres=16`,
    listCrime: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDA_API_KEY}&with_genres=99`,
    listHorror: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDA_API_KEY}&with_genres=27`,
    listReality: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDA_API_KEY}&with_genres=10764`,
    listNews: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDA_API_KEY}&with_genres=9648`,
    listFamily: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDA_API_KEY}&with_genres=10751`,
    listTalk: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDA_API_KEY}&with_genres=10767`,
    listKids: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDA_API_KEY}&with_genres=10762`,

}

export default TVSHOWS_REQUEST