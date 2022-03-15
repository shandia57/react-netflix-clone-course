import React, { useEffect } from 'react';

// CSS
import './css/index.css';

// MUI component
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';


import { useAppDispatch } from "../../redux/hooks";
import axios from 'axios';


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



const RowPosters = (props: Props) => {
    const basUrl = "https://image.tmdb.org/t/p/original/";
    const dispatch = useAppDispatch();


    const [open, setOpen] = React.useState(false);

    const handleOpen = (e: any) => {
        setOpen(true)
        const req = `https://api.themoviedb.org/3/movie/${e.target.id}?api_key=${process.env.REACT_APP_TMDA_API_KEY}&language=en-US`;
        axios.get(req).then((response: any) => {
            // console.log(response.data)
            let image = document.getElementById("modalImage");
            (image as HTMLInputElement).src = basUrl + response.data.backdrop_path;
            console.log(response.data)
        })

    };


    const handleClose = () => setOpen(false);


    return (
        <>
            <div id="containerBrowser" className="containerBrowser" >

                <h2 className="titleRow">{props.title}</h2>
                <div className="row__posters">
                    {props.data.map((movie: Movie) =>

                        <img
                            id={movie.id + ""}
                            key={movie.id}
                            src={`${basUrl}${props.isLargeRow ? movie.backdrop_path : movie.poster_path}`}
                            className={`row__poster`}
                            onClick={handleOpen}
                        />
                    )}
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <section className="sectionModal">
                        <div>
                            <img
                                id="modalImage"
                                src="" />
                        </div>
                        <div className="containerButtonModal">
                            <div className="leftButtons">
                                <Button
                                    sx=
                                    {{ bgColor: "white" }}
                                >Lecture

                                </Button>
                                <Fab size="small" aria-label="add">
                                    <AddIcon />
                                </Fab>
                                <Fab size="small">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                </Fab>
                                <Fab size="small">
                                    <FontAwesomeIcon icon={faThumbsDown} />
                                </Fab>
                            </div>
                            <div className="rightButtons">
                                <Fab size="small">
                                    <FontAwesomeIcon icon={faVolumeHigh} />
                                </Fab>
                            </div>
                        </div>


                    </section>
                </Box>
            </Modal>
        </>
    )
}

export default RowPosters;

// - Année de publication [âge] - nombres de saisons
// - description

// - Distribution
// - Genres


// Si films :

// Recommandé à 96% - année [âge] durée
// Description
// Distribution
// Genres

// Titres similaires
// Footer :
// - Réalisateur
// - Distribution
// - Genres
// - Catégories d'âges