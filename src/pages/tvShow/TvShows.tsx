import React, { useEffect } from 'react';

// css
import './css/index.css';

// Redux
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { fetchTvShows } from "../../redux/api/fetch/FetchTvShow";

// il8n
import translate from '../../il8n/translate';

import Navbar from '../../components/navbar/films/Navbar';
import Footer from '../../components/footer/Footer';
import Spinner from '../../components/layout/loading/spinner/Spinner';
import RowPosters from '../../components/catalog/RowPosters';
import Banner from '../banner/Banner';

const TvShows = () => {
    const dispatch = useAppDispatch();
    const popularTvShow = useAppSelector((state) => state.tvShow.popular)
    const animationTvShow = useAppSelector((state) => state.tvShow.animation)
    const crimeTvShow = useAppSelector((state) => state.tvShow.crime)
    const realityTvShow = useAppSelector((state) => state.tvShow.reality)
    const kidsTvShow = useAppSelector((state) => state.tvShow.kids)
    const isFetched = useAppSelector((state) => state.tvShow.isFetched)


    useEffect(() => {
        dispatch(fetchTvShows());
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
                    title={translate('trendingNowTvshow')}
                    data={popularTvShow}
                    isLargeRow={false}
                    wichContent="tv"

                />

                <RowPosters
                    title={translate('animationTvShow')}
                    data={animationTvShow}
                    isLargeRow={true}
                    wichContent="tv"

                />

                <RowPosters
                    title={translate('familyTvShow')}
                    data={crimeTvShow}
                    isLargeRow={true}
                    wichContent="tv"

                />

                <RowPosters
                    title={translate('realityTvShow')}
                    data={realityTvShow}
                    isLargeRow={true}
                    wichContent="tv"

                />
                <RowPosters
                    title={translate('kidsTvShow')}
                    data={kidsTvShow}
                    isLargeRow={true}
                    wichContent="tv"

                />

            </div>
            <Footer />
        </>

    )



}


export default TvShows;