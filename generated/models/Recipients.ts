/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Sending quota
 */
export type Recipients = {
    /**
     * How many messages per 24 hours can be sent
     */
    allowed: number;
    /**
     * How many messages are sent during current 24 hour period
     */
    used: number;
    /**
     * Time until the end of current 24 hour period
     */
    ttl: number;
};
