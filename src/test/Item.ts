import { Todoist } from '../Todoist/index';

// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/no-unused-vars
function myFunction_() {
  const task: Todoist.ItemAddArgs = {
    content: 'hogehoge',
  };

  const todoistToken = TODOIST_TOKEN;
  const todoist = new Todoist(todoistToken);
  const addedItem = todoist.items.add(task);
  Logger.log(addedItem);
}
