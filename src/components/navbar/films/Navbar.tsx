// css
import './css/nav.css';
import './css/nav-tab.css';
import './css/nav-mobile.css';

import Logo from '../../layout/logo/Logo';
import logo2 from './../../../assets/images/logo2.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Badge from '@mui/material/Badge';

// il8n
import translate from './../../../il8n/translate';

const Navbar = () => {
    return (

        <header className="containerNav">
            <nav className="left">

                <div className="containerNetflix">
                    <img src={logo2} className="logo" />
                </div>

                <div className="leftLink">
                    <a href="catalog">{translate("home")}</a>
                    <a href="">{translate("series")}</a>
                    <a href="">{translate("films")}</a>
                    <a href="">{translate("new&popular")}</a>
                    <a href="">{translate("myList")}</a>
                </div>


            </nav>

            <nav className="rightLink">
                <a href="#"><FontAwesomeIcon icon={faSearch} /></a>
                <a href="">DIRECT</a>
                <a href="">
                    <Badge badgeContent={4} color="primary">
                        <FontAwesomeIcon icon={faBell} />
                    </Badge>
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faUser} />
                </a>
            </nav>

        </header>

    )
}

export default Navbar;
