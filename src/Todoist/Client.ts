import { Items_ } from './Items';

export class Client {
  private static readonly SYNC_ENDPOINT = 'https://api.todoist.com/sync/v8/sync';

  private todoistToken: string;

  private _items: Items_;

  public constructor(token: string) {
    this.todoistToken = token;
  }

  public syncCommands(commands: Todoist.Command[]): [object] {
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

  get items(): Items_ {
    this._items = this._items || new Items_(this);
    return this._items;
  }
}
