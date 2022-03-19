
import { useNavigate } from 'react-router-dom';

import './css/index.css';
import translate from '../../../il8n/translate';
import RowUsers from '../../../components/profile/rowUsers/RowUsers';
import Logo from '../../../components/layout/logo/Logo';
import styled from '@mui/material/styles/styled';
import Button from '@mui/material/Button/Button';


const CustomButton = styled(Button)(() => ({
    textTransform: "capitalize",
    backgroundColor: "#fff",
    borderRadius: "0px",
    color: "black",
    fontWeight: "bold",
    padding: "8px 30px 8px 30px",
    marginRight: "20px",
    marginTop: "30px",
    '&:hover,&:focus': {
        backgroundColor: "#990000",
        color: "white"
    }

}));

const ManageProfile = () => {
    const navigate = useNavigate();

    const navToBrowse = () => {
        navigate("/browse")
    }

    return (
        <>
            <div className="containerNav">
                <div className="home-nav">
                    <Logo />
                </div>
            </div>
            <div className="containerManageProfile ">
                <h1>{translate('manageProfile')}</h1>
                <RowUsers />

                <CustomButton
                    onClick={navToBrowse}
                >{translate("done")}</CustomButton>

            </div>
        </>

    )
}

export default ManageProfile;