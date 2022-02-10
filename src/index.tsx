import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// css
import './index.css';

// pages
import Home from './components/home/Home';
import Connection from './components/connection/Connection';
import LayoutHome from './components/layout/LayoutHome';

import FilmList from './components/film-list/filmList';

export default function App() {
  return (
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
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
