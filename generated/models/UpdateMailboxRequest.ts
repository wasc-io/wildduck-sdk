/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateMailboxRequest = {
    /**
     * Full path of the mailbox, use this to rename an existing Mailbox
     */
    path?: string;
    /**
     * Is the folder hidden or not. Hidden folders can not be opened in IMAP.
     */
    hidden?: boolean;
    /**
     * Retention policy for the Mailbox (in ms). Changing retention value only affects messages added to this folder after the change
     */
    retention?: number;
    /**
     * Change Mailbox subscription state
     */
    subscribed?: boolean;
};
