/* eslint-disable no-underscore-dangle, @typescript-eslint/no-unused-vars */

const TODOIST_TOKEN = ''
function addSingleItem_() {
  const task: Todoist.ItemAddArgs = {
    content: 'Single Item',
    description: 'Single Item Description',
    labels: ['shopping 🎁'],
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
    item_id: '',
    content: 'Note !'
  };

  const todoist = new Client(TODOIST_TOKEN);
  const addedItem = todoist.addItem(item, note);
  Logger.log(addedItem);
}
/* eslint-enable no-underscore-dangle, @typescript-eslint/no-unused-vars */
