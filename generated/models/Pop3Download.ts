/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * POP3 download quota
 */
export type Pop3Download = {
    /**
     * How many bytes per 24 hours can be downloaded via POP3. Only message contents are counted, not protocol overhead.
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
