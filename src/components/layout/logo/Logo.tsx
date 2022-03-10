// css
import './css/index.css';
import './css/index-tab.css';
import './css/index-mobile.css';

// images
import logo2 from '../../../assets/images/logo2.svg';

const Logo = () => {

    return (
        <div className="logoContainer">
            <img className="logo" src={logo2} />
        </div>
    )
}

export default Logo;