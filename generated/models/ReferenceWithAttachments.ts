/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Optional referenced email. If uploaded message is a reply draft and relevant fields are not provided then these are resolved from the message to be replied to
 */
export type ReferenceWithAttachments = {
    /**
     * Mailbox ID
     */
    mailbox: string;
    /**
     * Message ID in Mailbox
     */
    id: number;
    /**
     * Either reply, replyAll or forward
     */
    action: string;
    /**
     * If true, then includes all attachments from the original message. If it is an array of attachment ID's includes attachments from the list
     */
    attachments: Array<string>;
};
