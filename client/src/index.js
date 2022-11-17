import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import UserDataContext from './contexts/userDataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <UserDataContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserDataContext>
  </>
);

