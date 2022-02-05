/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Receiving quota
 */
export type Received = {
    /**
     * How many messages per 1 hour can be received
     */
    allowed: number;
    /**
     * How many messages are received during current 1 hour period
     */
    used: number;
    /**
     * Time until the end of current 1 hour period
     */
    ttl: number;
};
