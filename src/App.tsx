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
import Browse from './pages/browse/Browse';
import ChangeProfile from "./pages/profile/change/ManageProfile";
import CreateUser from "./pages/profile/create/CreateUser";

// Theme
import theme from './custom/theme/theme';
import Movies from "./pages/Movies/Movies";
import TvShows from "./pages/tvShow/TvShows";
import UpdateUser from "./pages/profile/update/UpdateUser";
import WatchList from "./pages/watchList/WatchList";


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
                            <Route path="browse" element={<Browse />} />
                            <Route path="movies" element={<Movies />} />
                            <Route path="tvShow" element={<TvShows />} />
                            <Route path="watchList" element={<WatchList />} />
                            <Route path="profile/manage" element={<ChangeProfile />} />
                            <Route path="profile/create" element={<CreateUser />} />
                            <Route path="profile/update" element={<UpdateUser />} />
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
