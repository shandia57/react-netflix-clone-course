import React, { useEffect } from 'react';


import './css/index.css';

// modal

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';


import { FetchSingle } from "./../../redux/api/fetch/FectAll";
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
    // width: '50 %',
    bgcolor: '#141414',
    // border: '1px solid #141414',
    borderRadius: "20px ",
    p: 1,
};





const RowPosters = (props: Props) => {
    const basUrl = "https://image.tmdb.org/t/p/original/";
    const dispatch = useAppDispatch();


    const [open, setOpen] = React.useState(false);

    const handleOpen = (e: any) => {
        setOpen(true)
        const req = `https://api.themoviedb.org/3/movie/${e.target.id}?api_key=${process.env.REACT_APP_TMDA_API_KEY}&language=en-US`;
        axios.get(req).then((response: any) => {
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
                    <img src="https://static.bandainamcoent.eu/high/dragon-ball/dragonball-project-z/00-page-setup/dbzk_game-thumbnail.jpg" />
                </Box>
            </Modal>
        </>
    )
}

export default RowPosters;