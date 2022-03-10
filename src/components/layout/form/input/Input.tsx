import { useState } from 'react';

// css
import './css/index.css';
// MUI
import TextField from '@mui/material/TextField';


interface Props {
    labelInput: Object;
    labelError: Object;
    name: string;
}

const styles = {
    color: "#fff"
}

const Input = (props: Props) => {

    return (
        <>
            <TextField
                label={props.labelInput}
                color="warning"
                variant="filled"
                className="input-bk-grey"
                InputProps={{
                    style: styles,
                }}
                InputLabelProps={{ className: "input__label" }}
                name={props.name}

            />
            <p className="labelError">{props.labelError}</p>
        </>
    )
}

export default Input;