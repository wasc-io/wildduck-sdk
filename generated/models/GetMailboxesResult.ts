/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetMailboxesResult = {
    /**
     * Mailbox ID
     */
    id: string;
    /**
     * Name for the mailbox (unicode string)
     */
    name: string;
    /**
     * Full path of the mailbox, folders are separated by slashes, ends with the mailbox name (unicode string)
     */
    path: string;
    /**
     * Either special use identifier or null. One of \Drafts, \Junk, \Sent or \Trash
     */
    specialUse: string;
    /**
     * Modification sequence number. Incremented on every change in the mailbox.
     */
    modifyIndex: number;
    /**
     * Mailbox subscription status. IMAP clients may unsubscribe from a folder.
     */
    subscribed: boolean;
    /**
     * Default retention policy for this mailbox (in ms). If set then messages added to this maibox will be automatically deleted after retention time.
     */
    retention?: number;
    /**
     * Is the folder hidden or not
     */
    hidden: boolean;
    /**
     * How many messages are stored in this mailbox
     */
    total: number;
    /**
     * How many unseen messages are stored in this mailbox
     */
    unseen: number;
};
