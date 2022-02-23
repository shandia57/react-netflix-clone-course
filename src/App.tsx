/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';

// Layout
import LayoutHome from './components/layout/LayoutHome';

// pages
import Home from './components/pages/home/Home';
import Connection from './components/pages/connection/Connection';
import FilmList from './components/pages/film-list/filmList';

// Theme
import theme from './custom/theme/theme';


class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>

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

            </ThemeProvider>



        );
    }
}

export default App;
