declare namespace Todoist {
  interface Item {
    id: number;
    legacy_id: number;
    user_id: number;
    project_id: number;
    legacy_project_id: number;
    content: string;
    priority: 1|2|3|4;
    due: object|null;
    parent_id: number|null;
    legacy_parent_id: number|null;
    child_order: number;
    section_id: null;
    day_order: number;
    collapsed: 0|1;
    children: null;
    labels: [number];
    added_by_uid: number|null;
    assigned_by_uid: number|null;
    responsible_uid: number|null;
    checked: 0|1;
    in_history: 0|1;
    is_deleted: 0|1;
    sync_id: number|null;
    date_completed: number|null;
    date_added: string;
  }

  interface ItemAddArgs {
    content: string;
    project_id?: number|string;
    due?: object;
    priority?: 1|2|3|4;
    parent_id?: number|null;
    child_order?: number;
    section_id?: number|null;
    day_order?: number;
    collapsed?: 0|1;
    labels?: [number];
    assigned_by_uid?: number;
    responsible_uid?: number|null|'';
    auto_reminder?: boolean;
    auto_parse_labels?: boolean;
  }

  interface ItemUpdateArgs {
    id: number|string;
    content: string;
    due?: object;
    priority?: 1|2|3|4;
    collapsed?: 0|1;
    labels?: [number];
    assigned_by_uid?: number;
    responsible_uid?: number|null|'';
    day_order?: number;
  }

  interface ItemMoveArgs {
    id: number|string;
    parent_id?: number|string;
    section_id?: number|string;
    project_id?: number|string;
  }

  interface ItemDeleteArgs {
    id: number|string;
  }

  interface ItemCompleteArgs {
    id: number|string;
    date_completed: Date;
    force_history: boolean;
  }
}
