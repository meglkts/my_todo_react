const { clone, merge, filter, getValues } = require('./utils')
const uuid = require('uuid')
const generateId = uuid.v4

const taskListToKeyed = (taskList) => {
  return taskList.reduce((p, c) => {
    p[c.id] = c
    return p
  }, {})
}

const tasksToTaskList = (tasks) => {
  return getValues(tasks)
}

const makeTask = (id, text, date) => {
  return {
    id,
    text,
    status: 'active',
    created: date,
    updated: date,
    cleared: false
  }
}

const toggleStatus = (task, updated) => {
  const updatedTask = clone(task)
  const toggle = {
    completed: 'active',
    active: 'completed'
  }
  updatedTask.status = toggle[task.status]
  updatedTask.updated = updated
  return updatedTask
}

const setAllTasksStatus = (tasks, status) => {
  const list = tasksToTaskList(tasks)
  const listCompleted = list.map(t => merge(t, { status } ))
  return taskListToKeyed(listCompleted)
}

const toggleAllTasksCompleted = (tasks) => {
  return setAllTasksStatus(tasks, 'completed')
}

const toggleAllTasksActive = (tasks) => {
  return setAllTasksStatus(tasks, 'active')
}

const addTask = (now, list, text) => {
  const newestTask = makeTask(generateId(), text, now())
  const newList = merge(list, {[newestTask.id]: newestTask})
  return {
    newList,
    newestTask
  }
}

const filterTaskList = (filterStatus, taskList) => {
  if (filterStatus === 'all') return taskList
  const filterBy = t => t.status === filterStatus
  return filter(filterBy, taskList)
}

const deleteCompleted = (tasks) => {
  const taskList = tasksToTaskList(tasks)
  const activeOnly = filterTaskList('active', taskList)
  return taskListToKeyed(activeOnly)
}

const getActiveCount = (tasks) => {
  return filterTaskList('active', tasksToTaskList(tasks)).length
}

module.exports = {
  makeTask,
  toggleStatus,
  toggleAllTasksCompleted,
  toggleAllTasksActive,
  addTask,
  deleteCompleted,
  filterTaskList,
  tasksToTaskList,
  taskListToKeyed,
  getActiveCount
}
