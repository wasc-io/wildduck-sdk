/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Array of addresses from RCPT TO (should have just one normally)
 */
export type Rcpt = {
    /**
     * RCPT TO address as provided by SMTP client
     */
    value: string;
    /**
     * Normalized RCPT address
     */
    formatted: string;
};
