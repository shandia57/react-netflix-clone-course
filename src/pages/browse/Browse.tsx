import React, { useEffect } from 'react';
// css
import './css/films.css';

// Redux
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { FetchAll } from "../../redux/api/fetch/FectAll";

// il8n
import translate from '../../il8n/translate';

import Navbar from '../../components/navbar/films/Navbar';
import Footer from '../../components/footer/Footer';
import Spinner from '../../components/layout/loading/spinner/Spinner';
import RowPosters from '../../components/catalog/RowPosters';



const Browse = () => {
    const dispatch = useAppDispatch();
    const popular = useAppSelector((state) => state.movie.popular)
    const action = useAppSelector((state) => state.movie.action)
    const comedy = useAppSelector((state) => state.movie.comedy)
    const family = useAppSelector((state) => state.movie.family)
    const horror = useAppSelector((state) => state.movie.horror)

    const popularTvShow = useAppSelector((state) => state.tvShow.popular)
    const animationTvShow = useAppSelector((state) => state.tvShow.animation)
    const crimeTvShow = useAppSelector((state) => state.tvShow.crime)
    const realityTvShow = useAppSelector((state) => state.tvShow.reality)
    const kidsTvShow = useAppSelector((state) => state.tvShow.kids)

    const isFetched = useAppSelector((state) => state.movie.isFetched)

    const username = useAppSelector((state) => state.user.username);

    useEffect(() => {

        dispatch(FetchAll());

    }, []);

    if (!isFetched) {

        return (
            <Spinner />
        )
    }


    return (
        <>

            <div className="appContainer">
                <Navbar />

                <RowPosters
                    title={translate('trendingNowMovie')}
                    data={popular}
                    isLargeRow={true}
                    wichContent="movie"
                />
                <RowPosters
                    title={translate('trendingNowTvshow')}
                    data={popularTvShow}
                    isLargeRow={true}
                    wichContent="tv"

                />
                <RowPosters
                    title={translate('actionsMovie')}
                    data={action}
                    isLargeRow={true}
                    wichContent="movie"

                />
                <RowPosters
                    title={translate('crimeTvShow')}
                    data={crimeTvShow}
                    isLargeRow={true}
                    wichContent="tv"

                />
                <RowPosters
                    title={translate('kidsTvShow')}
                    data={kidsTvShow}
                    isLargeRow={true}
                    wichContent="tv"

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
                    title={translate('animationTvShow')}
                    data={animationTvShow}
                    isLargeRow={true}
                    wichContent="tv"

                />

                <RowPosters
                    title={translate('horrorMovie')}
                    data={horror}
                    isLargeRow={true}
                    wichContent="movie"
                />

                <RowPosters
                    title={translate('realityTvShow')}
                    data={realityTvShow}
                    isLargeRow={true}
                    wichContent="tv"

                />

            </div>
            <Footer />
        </>

    )
}



export default Browse;