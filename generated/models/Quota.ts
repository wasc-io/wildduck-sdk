/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Quota usage limits
 */
export type Quota = {
    /**
     * Allowed quota of the user in bytes
     */
    allowed: number;
    /**
     * Space used in bytes
     */
    used: number;
};
