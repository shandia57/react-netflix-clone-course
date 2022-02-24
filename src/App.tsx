/* eslint-disable import/no-anonymous-default-export */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';

// redux
import { useAppSelector } from "./redux/hooks";

// Il8nProvider
import { Il8nProvider } from './il8n';

// Layout
import LayoutHome from './components/layout/LayoutHome';

// pages
import Home from './pages/home/Home';
import Connection from './pages/connection/Connection';
import FilmList from './pages/film-list/filmList';

// Theme
import theme from './custom/theme/theme';


const App = () => {

    const appLanguage = useAppSelector((state) => state.language.appLanguage);
    return (
        <>

            <ThemeProvider theme={theme}>
                <Il8nProvider locale={appLanguage}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<LayoutHome />}>
                                <Route index element={<Home />} />
                                <Route path="connection" element={<Connection />} />
                            </Route>
                        </Routes>

                        {/* <Routes>
                    <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="connection" element={<Connection />} />
                    <Route path="films" element={<FilmList />} />
                    </Route>
                </Routes> */}
                    </BrowserRouter>
                </Il8nProvider>

            </ThemeProvider>

        </>



    );
}


export default App;
