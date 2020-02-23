declare namespace Todoist {
  interface Command {
    type: string;
    args: object;
    uuid: string;
    temp_id: string;
  }
}
