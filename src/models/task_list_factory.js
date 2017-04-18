const { makeTask, toggleStatus, tasksToTaskList } = require('./TaskList')

const tasks = () => {
  const task1 = makeTask('task-id-1', 'laundry', Date.now())
  const newTask2 = makeTask('task-id-2', 'groceries', Date.now())
  const task2 = toggleStatus(newTask2, Date.now())
  const newTask3 = makeTask('task-id-3', 'errands', Date.now())
  const task3 = toggleStatus(newTask3, Date.now())
  const task4 = makeTask('task-id-4', 'email', Date.now())

  const taskObj = {
    [task1.id]: task1,
    [task2.id]: task2,
    [task3.id]: task3,
    [task4.id]: task4
  }

  return tasksToTaskList(taskObj)
}

module.exports = {
  tasks
}
