/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateMailboxRequest = {
    /**
     * Full path of the mailbox, folders are separated by slashes, ends with the mailbox name (unicode string)
     */
    path: string;
    /**
     * Is the folder hidden or not. Hidden folders can not be opened in IMAP.
     */
    hidden?: boolean;
    /**
     * Retention policy for the created Mailbox. Milliseconds after a message added to mailbox expires. Set to 0 to disable.
     */
    retention?: number;
};
