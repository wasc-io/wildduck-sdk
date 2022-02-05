/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { ContentType } from './ContentType';

export type SearchMessagesResult = {
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
     * Relative API url for fetching message contents
     */
    url: string;
    contentType: ContentType;
};
