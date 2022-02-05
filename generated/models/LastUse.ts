/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Information about last use
 */
export type LastUse = {
    /**
     * Datestring of last use or false if password has not been used
     */
    time: string;
    /**
     * Event ID of the security log for the last authentication
     */
    event: string;
};
