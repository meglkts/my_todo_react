import React from 'react';
const r = React.createElement
import ReactDOM from 'react-dom';
import { AppContainer } from './containers/App';
import './styles/app.css';
import './styles/list.css';
import './styles/item.css';

const initialState = {}

ReactDOM.render(
  r(AppContainer, initialState),
  document.getElementById('root')
);
