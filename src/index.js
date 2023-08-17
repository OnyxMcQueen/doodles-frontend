import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from '@lyket/react';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider apiKey='pt_22e3b799a457363b141082004cd5fd'>
        <App />
    </Provider>
);
