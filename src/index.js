import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import { loadConfig } from 'core/config';
import './css/styles.css';

const render = async () => {
  await loadConfig();
  ReactDOM.render(<App />, document.getElementById('app'));
};

render();
