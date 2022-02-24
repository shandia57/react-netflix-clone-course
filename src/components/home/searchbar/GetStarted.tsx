// Redux
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setAppLanguage } from "../../../redux/reducers/language.reducer";

// css
import './css/index.css';
import './css/index-tab.css';
import './css/index-mobile.css';

// Component MUI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

// il8n
import translate from '../../../il8n/translate';

const GetStarted = () => {

    const dispacth = useAppDispatch();
    const currentLanguage = useAppSelector((state) => state.language.appLanguage)

    return (
        <div className="formContainer">
            <TextField size="medium" color="warning" className="inputEmail" label={translate("emailAddress")} variant="standard" />

            <Button variant="contained" endIcon={<FontAwesomeIcon icon={faAngleRight} />} className="buttonStart" >{translate("getStarted")}</Button>
        </div>
    );
}

export default GetStarted;