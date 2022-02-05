/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EnableTotp2FARequest = {
    /**
     * 6-digit number that matches seed value from 2fa/totp/setup
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
