// routing
import { Link } from "react-router-dom";

// css
import './css/nav.css';
import './css/nav-tab.css';
import './css/nav-mobile.css';

// Component MUI
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

// images
import logo2 from '../../assets/images/logo2.svg';

// Redux
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setAppLanguage } from "../../redux/reducers/language.reducer";

// il8n
import translate from '../../il8n/translate';




const CustomButton = styled(Button)(() => ({
    textTransform: "capitalize",
    '&.Mui-select': {
        textTransform: "capitalize",
    },
}));

const Navbar = () => {
    const dispacth = useAppDispatch();
    const currentLanguage = useAppSelector((state) => state.language.appLanguage)
    console.log(currentLanguage);

    const handleLanguageChange = (e: any) => {
        dispacth(setAppLanguage(e.target.value))
    }
    return (
        <>
            <nav className="home-nav">
                <div className="logoContainer">
                    <img className="logo" src={logo2} />
                </div>

                <div className="containerRight">

                    <div className="select-menu">
                        <FontAwesomeIcon className="iconGlobe" icon={faGlobe} />
                        <select
                            value={currentLanguage}
                            onChange={handleLanguageChange}
                        >
                            <option value="fr-FR">Français</option>
                            <option value="en-US">English</option>
                        </select>
                    </div>
                    <div>
                        <Link to="/connection">
                            <CustomButton
                                variant="contained"
                                color="primary"
                                className="buttonLogin"

                            > {translate("signin")}
                            </CustomButton>
                        </Link>
                    </div>
                </div>
            </nav >
        </>
    );

}

export default Navbar;
