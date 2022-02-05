/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { Attachments } from './Attachments';
import type { ContentType } from './ContentType';
import type { Envelope } from './Envelope';
import type { Files } from './Files';
import type { List } from './List';
import type { Outbound } from './Outbound';
import type { VerificationResults } from './VerificationResults';

export type GetMessageResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * ID of the Message
     */
    id: number;
    /**
     * ID of the Mailbox
     */
    mailbox: string;
    /**
     * ID of the User
     */
    user: string;
    envelope: Envelope;
    /**
     * ID of the Thread
     */
    thread: string;
    from: Address;
    to?: Address;
    cc?: Address;
    bcc?: Address;
    /**
     * Message subject
     */
    subject: string;
    /**
     * Message-ID header
     */
    messageId: string;
    /**
     * Date string from header
     */
    date: string;
    /**
     * Date string of receive time
     */
    idate?: string;
    list?: List;
    /**
     * Datestring, if set then indicates the time after this message is automatically deleted
     */
    expires?: string;
    /**
     * Does this message have a \Seen flag
     */
    seen: boolean;
    /**
     * Does this message have a \Deleted flag
     */
    deleted: boolean;
    /**
     * Does this message have a \Flagged flag
     */
    flagged: boolean;
    /**
     * Does this message have a \Draft flag
     */
    draft: boolean;
    /**
     * An array of HTML string. Every array element is from a separate mime node, usually you would just join these to a single string
     */
    html?: Array<string>;
    /**
     * Plaintext content of the message
     */
    text?: string;
    /**
     * Attachments for the message
     */
    attachments?: Array<Attachments>;
    verificationResults?: VerificationResults;
    contentType: ContentType;
    /**
     * Custom metadata object set for this message
     */
    metaData: any;
    /**
     * Referenced message info
     */
    reference?: any;
    files?: Files;
    /**
     * Outbound queue entries
     */
    outbound?: Array<Outbound>;
};
