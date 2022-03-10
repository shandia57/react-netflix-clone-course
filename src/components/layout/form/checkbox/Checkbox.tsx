import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// css
import './css/index.css'
import Typography from '@mui/material/Typography/Typography';


interface Props {
    label: any;
}


const CheckboxLabels = (props: Props) => {

    return (

        <FormControlLabel
            control={
                <Checkbox
                    defaultChecked
                    style={{
                        color: "rgb(131, 131, 131)",
                        height: "30px",

                    }}
                    classes={{ root: 'custom-checkbox-root' }}


                />}
            label={
                <Typography sx={{ fontSize: 14 }}>
                    {props.label}
                </Typography>
            }
            style={{
                color: "lightgray",

            }}



        />



    );

}

export default CheckboxLabels