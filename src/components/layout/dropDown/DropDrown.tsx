import * as React from 'react';
import { Link } from 'react-router-dom';


import "./css/index.css";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styled from '@mui/material/styles/styled';

// redux
import { useAppSelector } from "./../../../redux/hooks";
import translate from "../../../il8n/translate";

const CustomButton = styled(Button)(() => ({
    textTransform: "capitalize",
    backgroundColor: "transparent",
    color: "white",
    fontWeight: "700",
    padding: "0",
    '&:hover,&:focus': {
        backgroundColor: "transparent",
    }
}));

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


export default function DropDown() {

    const users = useAppSelector((state) => state.user.users);
    const email = useAppSelector((state) => state.user.email);
    const username = useAppSelector((state) => state.user.username);
    const image = findUserImage(users, email, username);
    console.log(image)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <CustomButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <img id="userImage" src={"assets/avatar/" + image} />
            </CustomButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Link to="/profile/manage">{translate("manageProfile")}</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/profile/create">{translate("addNewProfile")}</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/profile/update">
                        {translate("updateProfile")}
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );
}