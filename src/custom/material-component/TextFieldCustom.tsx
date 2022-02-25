import { createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '&:focus': {
                        backgroundColor: "#333",
                    }
                }
            }
        }
    }
})

