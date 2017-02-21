import { configure } from '@kadira/storybook'
import '../src/styles/font.css';
import '../src/styles/app.css';
import '../src/styles/list.css';
import '../src/styles/item.css';

function loadStories() {
  require('../src/components/taskItem/TaskItem.story.js'),
  require('../src/components/taskList/TaskList.story.js'),
  require('../src/components/taskList/TaskListWrapper.story.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)
