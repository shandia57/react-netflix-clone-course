import { useEffect, useState } from "react";

import "./css/index.css";
import axios from 'axios';

import { useAppSelector } from "../../redux/hooks";
import translate from "../../il8n/translate";

// MUI component
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


interface Props {
    type: string;
    id: string;
}

const style = {
    color: 'white',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#141414',
    borderRadius: "5px ",
    width: "800px",
    // p: 1,
};

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







const SingleContent = (props: Props) => {

    const [open, setOpen] = useState(false);
    const [currentId, setCurrentId] = useState("");
    const [urlImage, setUrlImage] = useState("");
    const handleClose = () => setOpen(false);

    const appLanguage = useAppSelector((state) => state.language.appLanguage);
    const req = `https://api.themoviedb.org/3/${props.type}/${props.id}?api_key=${process.env.REACT_APP_TMDA_API_KEY}&language=${appLanguage}`;
    const basUrl = "https://image.tmdb.org/t/p/original/";

    const handleOpen = (e: any) => {
        setOpen(true)
    }




    axios.get(req)
        .then((response: any) => {
            setUrlImage(basUrl + response.data.backdrop_path);


            let image = document.getElementById("modalImage");
            (image as HTMLInputElement).src = basUrl + response.data.backdrop_path;


            // display Average
            const average = document.getElementById("dataAverage");
            (average as HTMLInputElement).innerText = response.data.vote_average + " / 10";

            if (props.type === 'movie') {

                const seasons = document.getElementById("seasons");
                seasons!.style.display = "none";

                // display year
                const date = new Date(response.data.release_date).getFullYear();
                let year = document.getElementById("movieYear");
                (year as HTMLInputElement).innerText = date.toString();


                // display runtime
                const runTime = document.getElementById("dataRunTime");
                const hours = Math.floor(response.data.runtime / 60);
                const minutes = response.data.runtime % 60;
                (runTime as HTMLInputElement).innerText = `${hours} h ${minutes}`;
            } else if (props.type === 'tv') {

                const runTime = document.getElementById("dataRunTime");

                // display year
                const date = new Date(response.data.first_air_date).getFullYear();
                let year = document.getElementById("movieYear");
                (year as HTMLInputElement).innerText = date.toString();

                // display seasons
                const numberSeasons = document.getElementById("numberSeason");
                (numberSeasons as HTMLInputElement).innerText = response.data.number_of_seasons;
            }

            // display description text
            const dataTextDescription = document.getElementById("dataTextDescription");
            (dataTextDescription as HTMLInputElement).innerText = response.data.overview;

            // display distribution
            const distribution = document.getElementById("dataProduction");
            const sizeDistribution = response.data.production_companies.length;
            let arrayDistributionName = [];

            for (let i = 0; i < sizeDistribution; i++) {
                arrayDistributionName.push(response.data.production_companies[i].name);
            }
            (distribution as HTMLInputElement).innerText = arrayDistributionName.join(', ');

            const genres = document.getElementById("dataGenres");
            const sizeGenres = response.data.genres.length;
            let arrayGenresName = [];

            for (let i = 0; i < sizeGenres; i++) {
                arrayGenresName.push(response.data.genres[i].name);
            }
            (genres as HTMLInputElement).innerText = arrayGenresName.join(', ');
        })



    return (
        <>
            <img onClick={handleOpen} src={urlImage} className={`rowPoster`} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <section >
                        <div className="sectionModal">
                            <div>
                                <img
                                    id="modalImage"
                                    src="" />
                            </div>
                            <div className="containerButtonModal">
                                <div className="leftButtons">
                                    <CustomButton
                                        className="spaceBetweenButton"
                                    >
                                        <FontAwesomeIcon icon={faPlay} />
                                        <span className="spaceBetweenButton">Lecture</span>

                                    </CustomButton>

                                    <CustomFab size="small">
                                        <FontAwesomeIcon icon={faThumbsUp} />
                                    </CustomFab>
                                    <CustomFab size="small">
                                        <FontAwesomeIcon icon={faThumbsDown} />
                                    </CustomFab>
                                </div>
                                <div className="rightButtons">
                                    <CustomFab size="small">
                                        <FontAwesomeIcon icon={faVolumeHigh} />
                                    </CustomFab>
                                </div>
                            </div>
                        </div>

                        <div className="containerDescriptionMovie">
                            <div className="leftDescriptionMovie">
                                <p id="leftTextDescription" className="textFirstDescription">
                                    <span className="average">
                                        {translate('average')}
                                        <span id="dataAverage"></span>
                                    </span>
                                    <span id="movieYear"></span>
                                    <span id="dataRunTime"></span>
                                    <span id="seasons">
                                        <span id="numberSeason"></span>
                                        <span>{translate('seasons')}</span>
                                    </span>
                                </p>

                                <p id="dataTextDescription" className="textSecondDescription"></p>
                            </div>

                            <div className="rightDescriptionMovie">
                                <p>
                                    <span className="titleRightDescription"> {translate("production")} </span>
                                    <span id="dataProduction"></span>
                                </p>
                                <p>
                                    <span className="titleRightDescription"> {translate("genres")} </span>
                                    <span id="dataGenres"></span>
                                </p>
                            </div>
                        </div>


                    </section>
                </Box>
            </Modal>
        </>
    )
}


export default SingleContent;