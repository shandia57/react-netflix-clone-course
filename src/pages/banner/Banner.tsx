import Navbar from "../../components/navbar/films/Navbar";
import "./css/index.css";

import Button from '@mui/material/Button/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import translate from "../../il8n/translate";
import { useState } from "react";
import { setWatchlist } from "../../redux/reducers/user.reducer";
const CustomButton = styled(Button)(() => ({
    textTransform: "capitalize",
    backgroundColor: "white",
    color: "black",
    fontWeight: "700",
    '&:hover,&:focus': {
        backgroundColor: "rgba(255,255,255,0.5)",
    }
}));

const CustomFab = styled(Fab)(() => ({
    backgroundColor: "transparent",
    color: "white",
    fontWeight: "700",
    border: "1px solid white",
    marginLeft: "10px;",
    '&:hover,&:focus': {
        backgroundColor: "rgba(255,255,255,0.2)",
    }
}))

const Banner = () => {
    const [urlImage, setUrlImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useAppDispatch();
    const appLanguage = useAppSelector((state) => state.language.appLanguage);
    const req = `https://api.themoviedb.org/3/tv/71912?api_key=${process.env.REACT_APP_TMDA_API_KEY}&language=${appLanguage}`;
    const basUrl = "https://image.tmdb.org/t/p/original/";

    axios.get(req)
        .then((response: any) => {
            setUrlImage(basUrl + response.data.backdrop_path);
            setTitle(response.data.name)
            setDescription(response.data.overview)

        })

    const addWatchlist = () => {
        dispatch(setWatchlist(
            {
                type: "tv",
                id: "71912",
            }
        ))
        alert("Ce contenu a été ajouté à votre liste")
    }


    return (
        <section className="banner">
            <Navbar />
            <img
                className="img__banner"
                src={urlImage} />

            <div >
                <div className="textDescription">
                    <h1>{title}</h1>
                    <p>Après le combat contre Boo, la Terre connait une période de paix. Cependant, le dieu de la destruction, Beerus, vient de se réveiller d'un sommeil de 39 ans avec l'intention d'affronter le Super Saïyen Divin, le guerrier légendaire dont parle une ancienne prophétie exprimée par le Poisson Oracle.</p>
                </div>
                <div className="containerButtonModal">
                    <div className="banner__left-buttons">
                        <CustomButton
                            className="spaceBetweenButton"
                        >
                            <FontAwesomeIcon icon={faPlay} />
                            <span className="spaceBetweenButton">Lecture</span>

                        </CustomButton>
                        <CustomFab onClick={addWatchlist} size="small" aria-label="add">
                            <AddIcon />
                        </CustomFab>
                        <CustomFab size="small">
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </CustomFab>
                        <CustomFab size="small">
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </CustomFab>
                    </div>
                </div>
                <div className="banner__right-buttons">
                    <CustomFab size="small">
                        <FontAwesomeIcon icon={faVolumeHigh} />
                    </CustomFab>
                </div>
            </div>

        </section>
    )
}

export default Banner;