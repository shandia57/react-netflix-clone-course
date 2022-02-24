// il8n
import translate from '../../il8n/translate';

// css
import './css/index.css';

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