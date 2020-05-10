import React from 'react';
import ReactDOM from 'react-dom';

// insertamos la hoja de estilos bootstrap que tomamos 
import './bootstrap.min.css';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
