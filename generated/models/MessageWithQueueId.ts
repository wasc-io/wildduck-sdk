/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Information about submitted Message
 */
export type MessageWithQueueId = {
    /**
     * Mailbox ID the message was stored to
     */
    mailbox: string;
    /**
     * Message ID in Mailbox
     */
    id: number;
    /**
     * Queue ID in MTA
     */
    queueId: string;
};
