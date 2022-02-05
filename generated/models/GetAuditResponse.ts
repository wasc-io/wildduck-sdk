/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetAuditResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * Users unique ID.
     */
    user: string;
    /**
     * Start time as ISO date
     */
    start?: string;
    /**
     * End time as ISO date
     */
    end?: string;
    /**
     * Expiration date. Audit data is deleted after this date
     */
    expires: string;
};
