declare namespace Todoist {
  interface Note {
    id: number;
    legacy_id: number;
    posted_uid: number;
    project_id: number;
    legacy_project_id: number;
    item_id: number;
    legacy_item_id: number;
    content: string;
    file_attachment: FileAttachment;
    uids_to_notify: number[];
    is_deleted: 0|1;
    posted: string;
    reactions: Reaction;
  }

  interface FileAttachment {
    file_type: string|'text/plain';
    file_name: string;
    file_size: number;
    file_url: string;
    upload_state: 'pending'|'completed';
  }

  interface Reaction {
    [key: string]: number[];
  }

  interface NoteAddArgs {
    item_id?: number|string; // When adding note with item, filled by temp=id of item.
    content: string
    file_attachment?: FileUploadArgs;
    uids_to_notify?: number[];
  }

  interface FileUploadArgs {
    file_name: string;
    file: string;
  }
}
