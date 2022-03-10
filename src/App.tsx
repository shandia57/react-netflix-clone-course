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
import Catalog from './pages/catalog/Catalog';

// Theme
import theme from './custom/theme/theme';


const App = () => {

    const appLanguage = useAppSelector((state) => state.language.appLanguage);
    return (

        <ThemeProvider theme={theme}>
            <Il8nProvider locale={appLanguage}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LayoutHome />}>
                            <Route index element={<Home />} />
                            <Route path="connection" element={<Connection />} />
                            <Route path="catalog" element={<Catalog />} />
                        </Route>
                        <Route path="">

                        </Route>
                    </Routes>
                </BrowserRouter>
            </Il8nProvider>

        </ThemeProvider>




    );
}


export default App;
