// css
import './css/index.css';

// il8n
import translate from '../../../il8n/translate';

// MUI
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';



const Form = () => {

    return (
        <div>
            <form>
                <TextField
                    label={translate("loginPlaceHolderEmail")}
                    color="warning"
                    variant="filled"
                    className="input-bk-grey"
                />

                <TextField
                    label={translate("password")}
                    color="warning"
                    variant="filled"
                    className="input-bk-grey"
                />
            </form>


        </div>
    );
}

export default Form;