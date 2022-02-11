import React, { Component } from 'react';
import './home.css';

import logo2 from '../../../assets/images/logo2.svg';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import UnstyledSelectSimple from './../../../custom/material-component/UnstyledSelect';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'



const CustomButton = styled(Button)(() => ({
    textTransform: "capitalize",
    '&.Mui-select': {
        textTransform: "capitalize",
    },
}));


class Home extends Component {



    render() {
        return (
            <div id="App" className="background">
                <div className="overlay">
                    <nav className="home-nav">
                        <div className="logoContainer">
                            <img className="logo" src={logo2} />
                        </div>

                        <div className="containerRight">
                            <div>
                                <UnstyledSelectSimple />
                            </div>
                            <div>
                                <CustomButton
                                    variant="contained"
                                    color="primary"
                                >S'identifier
                                </CustomButton>
                            </div>
                        </div>
                    </nav >

                    <div className="mainContainer">
                        <div className="containerTitles">
                            <h1>Films, séries TV et bien plus en illimité.</h1>
                            <h2>Où que vous soyez. Annulez à tout moment.</h2>
                            <h3>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h3>
                        </div>
                        <div className="formContainer">
                            <TextField size="medium" color="warning" className="inputEmail" label="Adresse e-mail" variant="standard" />

                            <CustomButton variant="contained" endIcon={<FontAwesomeIcon icon={faAngleRight} />} className="buttonStart" >Commencer</CustomButton>
                        </div>
                    </div>
                </div>




            </div >
        )
    }
}

export default Home;