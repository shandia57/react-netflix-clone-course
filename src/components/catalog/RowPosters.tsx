import './css/index.css';


interface Movie {
    poster_path: string;
    backdrop_path: string;
    id: number;
}


interface Props {
    title: Object;
    data: Array<Movie>
    isLargeRow: boolean;

}



const RowPosters = (props: Props) => {
    const basUrl = "https://image.tmdb.org/t/p/original/";

    return (
        <div className="containerBrowser">
            <h2 className="titleRow">{props.title}</h2>
            <div className="row__posters">
                {props.data.map((movie: Movie) =>
                    <img
                        key={movie.id}
                        src={`${basUrl}${props.isLargeRow ? movie.backdrop_path : movie.poster_path}`}
                        className={`row__poster`}
                    />
                )}
            </div>
        </div>
    )
}

export default RowPosters;