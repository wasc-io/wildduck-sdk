/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ImapMaxConnections = {
    /**
     * How many parallel IMAP connections are permitted
     */
    allowed: number;
    /**
     * How many parallel IMAP connections are currenlty in use
     */
    used: number;
};
