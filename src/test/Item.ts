import { Client } from '../Todoist/Client';

/* eslint-disable no-underscore-dangle, @typescript-eslint/no-unused-vars */

function addSingleItem_() {
  const task: Todoist.ItemAddArgs = {
    content: 'Single Item',
  };

  const todoist = new Client(TODOIST_TOKEN);
  const addedItem = todoist.addItem(task);
  Logger.log(addedItem);
}

function addItemWithNote_() {
  const item: Todoist.ItemAddArgs = {
    content: 'Item with Note',
  };

  const note: Todoist.NoteAddArgs = {
    content: 'Note !',
  };

  const todoist = new Client(TODOIST_TOKEN);
  const addedItem = todoist.addItem(item, note);
  Logger.log(addedItem);
}
/* eslint-enable no-underscore-dangle, @typescript-eslint/no-unused-vars */
