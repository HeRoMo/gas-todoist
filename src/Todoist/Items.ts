import { Client } from './Client'; // eslint-disable-line import/no-cycle

export class Items_ {
  private readonly todoist: Client;

  constructor(todoist: Client) {
    this.todoist = todoist;
  }

  public add(item: Todoist.ItemAddArgs, note?: Todoist.NoteAddArgs) {
    const itemTempId = Utilities.getUuid();
    const commands = [{
      args: item,
      temp_id: itemTempId, // eslint-disable-line @typescript-eslint/camelcase
      type: 'item_add',
      uuid: Utilities.getUuid(),
    }];
    if (note) {
      // eslint-disable-next-line @typescript-eslint/camelcase
      const addingNote = { ...note, item_id: itemTempId };
      const noteCommand = {
        args: addingNote,
        temp_id: Utilities.getUuid(), // eslint-disable-line @typescript-eslint/camelcase
        type: 'note_add',
        uuid: Utilities.getUuid(),
      };
      commands.push(noteCommand);
    }
    return this.todoist.syncCommands(commands);
  }
}
