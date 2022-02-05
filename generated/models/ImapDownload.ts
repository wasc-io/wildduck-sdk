/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * IMAP download quota
 */
export type ImapDownload = {
    /**
     * How many bytes per 24 hours can be downloaded via IMAP. Only message contents are counted, not protocol overhead.
     */
    allowed: number;
    /**
     * How many bytes are downloaded during current 24 hour period
     */
    used: number;
    /**
     * Time until the end of current 24 hour period
     */
    ttl: number;
};
