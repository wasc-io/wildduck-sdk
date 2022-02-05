/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckTotp2FARequest = {
    /**
     * 6-digit number
     */
    token: string;
    /**
     * Session identifier for the logs
     */
    sess?: string;
    /**
     * IP address for the logs
     */
    ip?: string;
};
