import React from 'react';
const r = React.createElement
import ReactDOM from 'react-dom';
import { App } from './components/App';
import './styles/app.css';
import './styles/list.css';
import './styles/item.css';

const { makeTask } = require('./models/TaskList')
const text = ['laundry', 'shopping', 'call mom', 'mow lawn', 'email friend']
const tasks = text.reduce((p, c) => {
  let t = makeTask(`id-${c}`, c, Date.now)
  p.push(t)
  return p
}, [])
const filter = 'All'
const activeCount = Object.keys(tasks).length

const state = {
  tasks,
  filter,
  activeCount
}


ReactDOM.render(
  r(App, state),
  document.getElementById('root')
);
