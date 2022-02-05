/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Forwarding quota
 */
export type Forwards = {
    /**
     * How many messages per 24 hours can be forwarded
     */
    allowed: number;
    /**
     * How many messages are forwarded during current 24 hour period
     */
    used: number;
    /**
     * Time until the end of current 24 hour period
     */
    ttl: number;
};
