const { createElement: r } = require('react')

let text = ''

const setText =(newText) => {
  text = newText
}

const getText =() => {
  return text
}

const changeHandler = (e) => {
  setText(e.target.value)
}

const addTask = (e, broadcast) => {
  if (e.which === 13) {
    broadcast('createTask', e.target.value)
    e.target.value = ''
    setText('')
  }
}

const TaskInputText = ({broadcast}) => {
  return r('input', {
    className: `task-input-text grow-1 pd-main text-main`,
    placeholder: 'What needs to be done?',
    onChange: changeHandler,
    onKeyUp: (e) => addTask(e, broadcast)
  })
}

module.exports = {
  TaskInputText,
  getText
}
