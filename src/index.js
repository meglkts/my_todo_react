import React from 'react';
const r = React.createElement
import ReactDOM from 'react-dom';
import { App } from './components/App';
import './styles/app.css';
import './styles/list.css';
import './styles/item.css';

ReactDOM.render(
  r(App),
  document.getElementById('root')
);
