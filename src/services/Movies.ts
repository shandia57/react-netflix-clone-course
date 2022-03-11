
class Movies {


    private popular: Array<Object> = [];


    public async getPopularMovies() {
        let popular: any =
            await fetch("https://api.themoviedb.org/3/movie/popular?api_key=&language=fr-FR&page=1", {
                method: 'GET'
            })
        let data = await popular.json();
        return data.results




    }

    public setPopularMovies(response: Object): void {
        this.popular.push(response);
    }



}

export default Movies;


