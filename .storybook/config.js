import { configure } from '@kadira/storybook'
import '../src/index.css';

function loadStories() {
  require('../src/components/taskItem/TaskItem.story.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)
