/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ResetUserPasswordRequest = {
    /**
     * Allow using the generated password not earlier than provided time
     */
    validAfter?: string;
    /**
     * Session identifier for the logs
     */
    sess?: string;
    /**
     * IP address for the logs
     */
    ip?: string;
};
