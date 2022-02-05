/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { ContentType } from './ContentType';

export type GetMessagesResult = {
    /**
     * ID of the Message
     */
    id: number;
    /**
     * ID of the Mailbox
     */
    mailbox: string;
    /**
     * ID of the Thread
     */
    thread: string;
    /**
     * Amount of messages in the Thread. Included if threadCounters query argument was true
     */
    threadMessageCount?: number;
    from: Address;
    /**
     * Recipients in To: field
     */
    to: Array<Address>;
    /**
     * Recipients in Cc: field
     */
    cc: Array<Address>;
    /**
     * Recipients in Bcc: field. Usually only available for drafts
     */
    bcc: Array<Address>;
    /**
     * Message subject
     */
    subject: string;
    /**
     * Date string from header
     */
    date: string;
    /**
     * Date string of receive time
     */
    idate?: string;
    /**
     * Message size in bytes
     */
    size: number;
    /**
     * First 128 bytes of the message
     */
    intro: string;
    /**
     * Does the message have attachments
     */
    attachments: boolean;
    /**
     * Is this message alread seen or not
     */
    seen: boolean;
    /**
     * Does this message have a \Deleted flag (should not have as messages are automatically deleted once this flag is set)
     */
    deleted: boolean;
    /**
     * Does this message have a \Flagged flag
     */
    flagged: boolean;
    /**
     * Does this message have a \Answered flag
     */
    answered: boolean;
    /**
     * Does this message have a $Forwarded flag
     */
    forwarded: boolean;
    contentType: ContentType;
    /**
     * Custom metadata value. Included if metaData query argument was true
     */
    metaData?: any;
};
