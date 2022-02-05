/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RestoreMessageResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * Maibox ID the message was moved to
     */
    mailbox: string;
    /**
     * New ID for the Message
     */
    id: number;
};
