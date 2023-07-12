// import React from 'react';
// import  ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
// import * as ReactDOMClient from 'react-dom/client';
// import {BrowserRouter} from 'react-router-dom'
// import App from './App';

// const root = ReactDOMClient.createRoot(document.getElementById('root'));

// root.render(
//    <BrowserRouter>
//    <App/>
//    </BrowserRouter>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import App from './App';





ReactDOM.render(
   <BrowserRouter basename="/"> 
     <App/>
     </BrowserRouter>,
  document.getElementById('root')
);

