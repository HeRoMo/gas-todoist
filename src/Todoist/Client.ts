export class Client {
  private static readonly SYNC_ENDPOINT = 'https://api.todoist.com/sync/v8/sync';

  private todoistToken: string;

  public constructor(token: string) {
    this.todoistToken = token;
  }

  public addItem(item: Todoist.ItemAddArgs, note?: Todoist.NoteAddArgs) {
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
    return this.syncCommands(commands);
  }

  private syncCommands(commands: Todoist.Command[]): [object] {
    const opts: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      method: 'post',
      contentType: 'application/x-www-form-urlencoded',
      muteHttpExceptions: true,
      payload: {
        commands: JSON.stringify(commands),
        token: this.todoistToken,
      },
    };
    const response = UrlFetchApp.fetch(Client.SYNC_ENDPOINT, opts);
    console.info({ message: 'Todoist.syncCommandsのレスポンス', response });
    return JSON.parse(response.getContentText());
  }
}
