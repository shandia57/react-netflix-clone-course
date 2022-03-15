// routing
import { Link, Outlet } from "react-router-dom";

// css
import './css/nav.css';
import './css/nav-tab.css';
import './css/nav-mobile.css';

// Component MUI
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// il8n
import translate from './../../../il8n/translate';

// components
import SelectLanguage from './../../layout/selectLanguage/SelectLanguage';
import Logo from './../../layout/logo/Logo';

const CustomButton = styled(Button)(() => ({
    textTransform: "capitalize",

    '&.Mui-select': {
        textTransform: "capitalize",
    },
}));

const Navbar = () => {

    return (

        <div className="containerNav">
            <nav className="home-nav">
                <Logo />

                <div className="containerRight">
                    <SelectLanguage />
                    <div>
                        <Link to="/connection" >

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
        </div>

    );

}

export default Navbar;
