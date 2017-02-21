import React from 'react';
const r = React.createElement
import ReactDOM from 'react-dom';
import { App } from './components/App';
import './index.css';

ReactDOM.render(
  r(App),
  document.getElementById('root')
);
