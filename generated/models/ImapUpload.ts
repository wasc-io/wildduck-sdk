/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * IMAP upload quota
 */
export type ImapUpload = {
    /**
     * How many bytes per 24 hours can be uploaded via IMAP. Only message contents are counted, not protocol overhead.
     */
    allowed: number;
    /**
     * How many bytes are uploaded during current 24 hour period
     */
    used: number;
    /**
     * Time until the end of current 24 hour period
     */
    ttl: number;
};
