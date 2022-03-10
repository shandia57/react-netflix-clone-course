// il8n
import translate from '../../il8n/translate';
import Footer from '../footer/Footer';


// css
import './css/index.css';
import './css/index-mobile.css';

// components
import Form from './form/Form';

const LoginContainer = () => {

    return (

        <div className="loginContainer">
            <h1>{translate("signin")}</h1>

            <Form />
        </div>


    );
}
export default LoginContainer;