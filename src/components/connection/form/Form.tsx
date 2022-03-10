import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


// css
import './css/index.css';

// il8n
import translate from '../../../il8n/translate';

// Redux
import { useAppDispatch } from "./../../../redux/hooks";
import { setUserEmail } from "./../../../redux/reducers/user.reducer";


import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import Input from './../../layout/form/input/Input';
import CheckboxLabels from './../../layout/form/checkbox/Checkbox';
import UnderForm from '../underForm/UnderForm';



const CustomButton = styled(Button)(() => ({
    textTransform: "capitalize",
    width: "100%",
    padding: "15px",
    '&.Mui-select': {
        textTransform: "capitalize",
        width: "100%",
        padding: "15px",
    },
}));

const emptyText = translate("emptyString");
const labelText1 = translate("loginPlaceHolderEmail");
const labelError1 = translate("labelErrorEmail");
const labelText2 = translate("password");
const labelError2 = translate("labelErrorPassword");
const textButton = translate("signin");



const Form = () => {
    const dispacth = useAppDispatch();
    const [emailErrorMessage, setEmailErrorMessage] = useState(emptyText);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState(emptyText);

    const emailRegex = new RegExp("[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+[.]+[a-zA-Z]");
    const phoneNumberRegex = new RegExp("[0-9]{10}");
    const passwordRegex = new RegExp("[a-zA-Z0-9._-]{4,60}");

    const navigate = useNavigate();

    const onSubmit = (event: React.FormEvent) => {
        let isValidForm = true;
        const form = (document.getElementsByName('form')[0] as HTMLFormElement)
        if (!form.email.value.match(emailRegex) && !form.email.value.match(phoneNumberRegex)) {
            isValidForm = false;
            setEmailErrorMessage(labelError1);
        }
        if (!form.password.value.match(passwordRegex)) {
            isValidForm = false;
            setPasswordErrorMessage(labelError2);
        }
        if (!isValidForm) {
            event.preventDefault();
        } else {
            dispacth(setUserEmail(form.email.value))
            navigate('/catalog')
        }

    }



    return (

        <div>
            <form name="form" className="formConnection" onSubmit={onSubmit}>

                <div className="formInput">
                    <div>
                        <Input
                            labelInput={labelText1}
                            labelError={emailErrorMessage}
                            name="email"
                        />
                    </div>
                    <div>
                        <Input
                            labelInput={labelText2}
                            labelError={passwordErrorMessage}
                            name="password"
                        />
                    </div>

                    <CustomButton
                        variant="contained"
                        className="buttonSignin"
                        type="submit"
                    >{textButton}
                    </CustomButton></div>

                <div className="underButton">
                    <CheckboxLabels label={translate("remberMe")} />
                    <p className="fakeLink">{translate("needHelp")}</p>
                </div>

                <UnderForm
                    fbText={translate("loginSigninWithFacebook")}
                    firstConnection={translate("loginFirstVisit")}
                    signUp={translate("signUp")}
                    smallText={translate("loginSmallText")}
                    learnMore={translate("learnMore")}
                />

            </form>


        </div>
    );
}

export default Form;
