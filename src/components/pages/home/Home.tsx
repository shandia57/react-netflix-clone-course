import { Fragment } from 'react';

// HOOK
import { useState } from "react";

// CSS
import './css/home.css';
import './css/home-mobile.css';
import './css/home-tab.css';


import logo2 from '../../../assets/images/logo2.svg';
import globe from '../../../assets/images/globe-solid.svg';

// Component 
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import UnstyledSelectSimple from './../../../custom/material-component/UnstyledSelect';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import LanguageIcon from "@mui/icons-material/Language";


// il8n
import { Il8nProvider, LOCALES } from '../../../il8n';
import translate from '../../../il8n/translate';



const CustomButton = styled(Button)(() => ({
    textTransform: "capitalize",
    '&.Mui-select': {
        textTransform: "capitalize",
    },
}));




const Home = () => {
    const [currentLanguage, setCurrentLanguage] = useState(LOCALES.FRENCH);

    return (
        <Il8nProvider locale={currentLanguage}>
            <div id="App" className="background">
                <div className="overlay">
                    <nav className="home-nav">
                        <div className="logoContainer">
                            <img className="logo" src={logo2} />
                        </div>

                        <div className="containerRight">

                            <div className="select-menu">
                                <FontAwesomeIcon className="iconGlobe" icon={faGlobe} />
                                <select
                                    value={currentLanguage}
                                    onChange={(event) => {
                                        setCurrentLanguage(event.target.value);
                                    }}
                                >
                                    <option value={LOCALES.FRENCH}>Français</option>
                                    <option value={LOCALES.ENGLISH}>English</option>
                                </select>
                            </div>
                            <div>
                                <CustomButton
                                    variant="contained"
                                    color="primary"
                                    className="buttonLogin"
                                > {translate("signin")}
                                </CustomButton>
                            </div>
                        </div>
                    </nav >

                    <div className="mainContainer">
                        <div className="containerTitles">
                            <h1>{translate("homeH1")}</h1>
                            <h2>{translate("homeH2")}</h2>
                            <h3>{translate("homeH3")}</h3>
                        </div>
                        <div className="formContainer">
                            <TextField size="medium" color="warning" className="inputEmail" label={translate("emailAddress")} variant="standard" />

                            <Button variant="contained" endIcon={<FontAwesomeIcon icon={faAngleRight} />} className="buttonStart" >{translate("getStarted")}</Button>
                        </div>
                    </div>
                </div>

            </div >
        </Il8nProvider>
    )
}

export default Home;