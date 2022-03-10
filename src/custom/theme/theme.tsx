
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            light: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            light?: string;
        },


    }

}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        myAwesomeColor: true;
    }
}


const theme = createTheme({
    palette: {

        // color red like Netflix
        primary: {
            light: '#ea3a43',
            main: '#e50914',
            dark: '#a0060e',
            contrastText: '#fff',
        },
        secondary: {
            light: '#f73378',
            main: '#f50057',
            dark: '#ab003c',
            contrastText: '#000',
        },
        warning: {
            main: "#ffa00a"
        }

    },
    status: {
        light: "#ffff",
    },

});

export default theme;