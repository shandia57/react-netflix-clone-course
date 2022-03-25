import React, { useEffect } from 'react';

// css
import './css/index.css';

// Redux
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { fetchMovies } from "../../redux/api/fetch/FetchMovies";

// il8n
import translate from '../../il8n/translate';

import Navbar from '../../components/navbar/films/Navbar';
import Footer from '../../components/footer/Footer';
import Spinner from '../../components/layout/loading/spinner/Spinner';
import RowPosters from '../../components/catalog/RowPosters';
import Banner from '../banner/Banner';

const Movies = () => {
    const dispatch = useAppDispatch();
    const popular = useAppSelector((state) => state.movie.popular)
    const action = useAppSelector((state) => state.movie.action)
    const comedy = useAppSelector((state) => state.movie.comedy)
    const family = useAppSelector((state) => state.movie.family)
    const horror = useAppSelector((state) => state.movie.horror)
    const isFetched = useAppSelector((state) => state.movie.isFetched)


    useEffect(() => {
        dispatch(fetchMovies());
    }, []);

    if (!isFetched) {

        return (
            <Spinner />
        )
    }


    return (
        <>
            <Banner />
            <div className="appContainer">


                <RowPosters
                    title={translate('trendingNowMovie')}
                    data={popular}
                    isLargeRow={false}
                    wichContent="movie"
                />

                <RowPosters
                    title={translate('actionsMovie')}
                    data={action}
                    isLargeRow={true}
                    wichContent="movie"
                />

                <RowPosters
                    title={translate('comedyMovie')}
                    data={comedy}
                    isLargeRow={true}
                    wichContent="movie"
                />

                <RowPosters
                    title={translate('familyMovie')}
                    data={family}
                    isLargeRow={true}
                    wichContent="movie"

                />
                <RowPosters
                    title={translate('horrorMovie')}
                    data={horror}
                    isLargeRow={true}
                    wichContent="movie"
                />

            </div>
            <Footer />
        </>

    )



}


export default Movies;