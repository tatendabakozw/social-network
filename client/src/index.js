import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, { initialState } from './Context/reducer';
import { StateProvider } from './Context/StateProvider';
import 'react-quill/dist/quill.snow.css'; // ES6

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);