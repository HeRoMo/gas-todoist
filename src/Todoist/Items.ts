import { Todoist } from './index'; // eslint-disable-line import/no-cycle

export default class Items {
  private readonly todoist: Todoist;

  constructor(todoist: Todoist) {
    this.todoist = todoist;
  }

  public add(item: Todoist.ItemAddArgs) {
    const commands = {
      args: item,
      temp_id: Utilities.getUuid(), // eslint-disable-line @typescript-eslint/camelcase
      type: 'item_add',
      uuid: Utilities.getUuid(),
    };
    return this.todoist.syncCommands([commands]);
  }
}
