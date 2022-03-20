import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Logo from "../../../components/layout/logo/Logo";
import "./css/index.css";


// MUI Component
import Button from "@mui/material/Button/Button";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import styled from "@mui/material/styles/styled";

// redux
import translate from "../../../il8n/translate";
import { useAppDispatch, useAppSelector } from "./../../../redux/hooks";
import { setUsers, setUsersAccountDetails } from "../../../redux/reducers/user.reducer";



const CustomButton = styled(Button)(() => ({
    textTransform: "capitalize",
    backgroundColor: "#fff",
    borderRadius: "0px",
    color: "black",
    fontWeight: "bold",
    padding: "3px 20px 3px 20px",
    marginRight: "20px",

}));


const CustomButtonSecond = styled(Button)(() => ({
    textTransform: "capitalize",
    backgroundColor: "transparent",
    borderRadius: "0px",
    color: "#777",
    fontWeight: "bold",
    padding: "3px 20px 3px 20px",
    marginRight: "20px",
    border: "1px solid #777"

}));

function countUsers(array: any, email: string) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].account === email) {
            return array[i].accountDetails.length
        }
    }
    return 0;
}

const CreateUser = () => {

    const [userInput, setUserInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const placeholder = translate('name');
    let users = useAppSelector((state) => state.user.users);
    const email = useAppSelector((state) => state.user.email);

    const userDetailsLength = countUsers(users, email)


    const handleChange = (event: any) => {
        setUserInput(event.target.value);
    }

    const goToBrowse = () => {
        navigate('/browse')
    }


    const setNewUser = () => {

        if (userInput !== "") {
            for (let i = 0; i < users.length; i++) {
                if (users[i].account === email) {
                    dispatch(setUsersAccountDetails({
                        "username": userInput,
                        "image": `${userDetailsLength}.png`,
                        "watchList": [],
                    }))
                    navigate('/profile/manage')
                }
            }
        }

    }

    return (
        <div className="containerCreateUser">
            <div className="containerNav">
                <div className="home-nav">
                    <Logo />
                </div>
            </div>

            <div className="newProfile">
                <div className="headerNewProfile">
                    <h1>{translate('addNewProfile')}</h1>
                    <p>{translate('addNewProfileText')}</p>
                </div>
                <hr />
                <div className="bodyNewProfile">
                    <div>
                        <img src={`../assets/avatar/${userDetailsLength}.png`} alt="" />
                    </div>
                    <div>
                        <input type="text" placeholder="Nom" onChange={handleChange} value={userInput} />
                    </div>
                    <div>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox sx={{
                                    color: "#777",
                                    '&.Mui-checked': {
                                        color: "#777",
                                    },
                                }} />}
                                label={translate('child?')}
                                style={{
                                    color: "lightgray",
                                }}
                            />
                        </FormGroup>
                    </div>
                </div>
                <hr />
                <div className="footerNewProfile">
                    <CustomButton onClick={setNewUser}>{translate('continue')}</CustomButton>
                    <CustomButtonSecond onClick={goToBrowse}>{translate('cancel')}</CustomButtonSecond>
                </div>


            </div>
        </div>
    )
}

export default CreateUser;