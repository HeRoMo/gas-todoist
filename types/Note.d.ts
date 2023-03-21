declare namespace Todoist {
  interface Note {
    id: string;
    posted_uid: string;
    item_id: string;
    content: string;
    file_attachment: FileAttachment;
    uids_to_notify: [string];
    is_deleted: boolean;
    posted_at: string;
    reactions: Reaction;
  }

  interface FileAttachment {
    file_name: string;
    file_size: number;
    file_type: string|'text/plain'|'image/png';
    file_url: string;
    upload_state: 'pending'|'completed';
  }

  interface Reaction {
    [key: string]: number[];
  }

  interface NoteAddArgs {
    item_id: string; // When adding note with item, filled by temp=id of item.
    content: string;
    file_attachment?: FileUploadArgs;
    uids_to_notify?: [string];
  }

  interface FileUploadArgs {
    file_name: string;
    file: string;
  }
}
