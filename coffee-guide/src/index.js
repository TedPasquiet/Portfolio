import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesApp from './Routes/RoutesApp';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <RoutesApp />
   </BrowserRouter>
);