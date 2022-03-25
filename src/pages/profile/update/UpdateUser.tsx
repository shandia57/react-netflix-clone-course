import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import "./css/index.css"
import Logo from "../../../components/layout/logo/Logo";

// redux
import translate from "../../../il8n/translate";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { updateUserName } from "../../../redux/reducers/user.reducer";

// MUI component
import SelectLanguage from '../../../components/layout/selectLanguage/SelectLanguage';
import Button from '@mui/material/Button/Button';
import styled from '@mui/material/styles/styled';
import Checkbox from "@mui/material/Checkbox/Checkbox";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";

const findUserImage = (users: any[], email: string, username: string) => {


    for (let i = 0; i < users.length; i++) {
        if (users[i].account === email) {
            for (let j = 0; j < users[i].accountDetails.length; j++) {
                if (users[i].accountDetails[j].username === username) {
                    return users[i].accountDetails[j].image;
                }
            }
        }
    }
    return false;
}

const CustomButton = styled(Button)(() => ({
    textTransform: "capitalize",
    backgroundColor: "#fff",
    borderRadius: "0px",
    color: "black",
    fontWeight: "bold",
    padding: "8px 30px 8px 30px",
    marginRight: "20px",
    '&:hover,&:focus': {
        backgroundColor: "rgba(255,255,255,0.2)",
    }

}));


const CustomButtonSecond = styled(Button)(() => ({
    textTransform: "capitalize",
    backgroundColor: "transparent",
    borderRadius: "0px",
    color: "#777",
    fontWeight: "bold",
    padding: "8px 30px 8px 30px",
    marginRight: "20px",
    border: "1px solid #777",
    '&:hover,&:focus': {
        backgroundColor: "rgba(255,255,255,0.2)",
    }

}));

const UpdateUser = () => {


    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.user.users);
    const email = useAppSelector((state) => state.user.email);
    const username = useAppSelector((state) => state.user.username);
    const image = findUserImage(users, email, username);
    const [inputValue, setInputValue] = useState(username + "");


    const handleChange = (event: any) => {
        setInputValue(event.target.value)
    }

    const navToBrowse = () => {
        navigate('/browse')
    }

    const saveChanges = () => {
        dispatch(updateUserName(inputValue))
        navigate('/browse')
    }


    return (
        <div>
            <div className="containerNav">
                <div className="home-nav">
                    <Logo />
                </div>
            </div>
            <div className="containerUpdateUser">
                <div className="headerUpdateUser">
                    <h1>{translate("updateProfile")}</h1>
                    <hr />
                </div>
                <div className="bodyUpdateUser">
                    <div className="topBody">
                        <div className="leftBody">
                            <img src={"/../assets/avatar/" + image} />
                        </div>

                        <div className="rightBody">
                            <div className="topRightBody">
                                <input value={inputValue} onChange={handleChange} />
                                <p className="text-margin">{translate('language')} :</p>
                                <SelectLanguage />
                            </div>
                            <hr />
                            <div className="middleRightBody">
                                <h2>{translate("categoryAge")}</h2>
                                <p className="fakeButton">{translate("allAges")}</p>
                                <p className="text-margin">{translate("textAges")}</p>
                                <CustomButtonSecond>
                                    {translate("edit")}
                                </CustomButtonSecond>
                            </div>

                            <hr />

                            <div className="footerRightBody">
                                <h2>{translate("playbackCommands")}</h2>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox sx={{
                                            color: "#777",
                                            '&.Mui-checked': {
                                                color: "#777",
                                            },
                                        }} />}
                                        label={translate('text1')}
                                        style={{
                                            color: "lightgray",
                                        }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox sx={{
                                            color: "#777",
                                            '&.Mui-checked': {
                                                color: "#777",
                                            },
                                        }} />}
                                        label={translate('text2')}
                                        style={{
                                            color: "lightgray",
                                        }}
                                    />
                                </FormGroup>
                            </div>

                        </div>
                    </div>
                </div>
                <hr />
                <div className="footerUpdateUser">
                    <CustomButton
                        onClick={saveChanges}
                    >
                        {translate("save")}
                    </CustomButton>
                    <CustomButtonSecond onClick={navToBrowse}>
                        {translate("cancel")}
                    </CustomButtonSecond>
                </div>
            </div>
        </div>

    )
}

export default UpdateUser;