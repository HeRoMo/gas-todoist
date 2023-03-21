declare namespace Todoist {
  type Item = {
    id: number;
    user_id: number;
    project_id: number;
    content: string;
    description: string;
    due?: object;
    priority: 1|2|3|4;
    parent_id?: number;
    child_order: number;
    section_id?: string;
    day_order: number;
    collapsed: boolean;
    labels: [string];
    added_by_uid?: number;
    assigned_by_uid?: string;
    responsible_uid?: string;
    checked: boolean;
    is_deleted: boolean;
    sync_id?: string;
    completed_at?: number;
    added_at: string;
  }

  interface ItemAddArgs {
    content: string;
    description?: string;
    project_id?: string;
    due?: object;
    priority?: 1|2|3|4;
    parent_id?: number|null;
    child_order?: number;
    section_id?: number|null;
    day_order?: number;
    collapsed?: boolean;
    labels?: [string];
    assigned_by_uid?: string;
    responsible_uid?: string;
    auto_reminder?: boolean;
    auto_parse_labels?: boolean;
  }

  interface ItemUpdateArgs {
    id: string;
    content?: string;
    description?: string;
    due?: object;
    priority?: 1|2|3|4;
    collapsed?: boolean;
    labels?: [string];
    assigned_by_uid?: string;
    responsible_uid?: string;
    day_order?: number;
  }

  interface ItemMoveArgs {
    id: string;
    parent_id?: string;
    section_id?: string;
    project_id?: string;
  }

  interface ItemDeleteArgs {
    id: string;
  }

  interface ItemCompleteArgs {
    id: string;
    date_completed?: Date;
  }
}
