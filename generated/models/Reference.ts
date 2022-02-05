/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Optional referenced email. If submitted message is a reply and relevant fields are not provided then these are resolved from the message to be replied to
 */
export type Reference = {
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
};
