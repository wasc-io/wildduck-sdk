/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SpecialUse } from './SpecialUse';

export type GetMailboxResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
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
    specialUse: SpecialUse;
    /**
     * Modification sequence number. Incremented on every change in the mailbox.
     */
    modifyIndex: number;
    /**
     * Mailbox subscription status. IMAP clients may unsubscribe from a folder.
     */
    subscribed: boolean;
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
