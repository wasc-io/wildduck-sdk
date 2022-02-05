/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SetupTotp2FARequest = {
    /**
     * Label text for QR code (defaults to username)
     */
    label?: string;
    /**
     * Description text for QR code (defaults to "WildDuck")
     */
    issuer?: string;
    /**
     * Session identifier for the logs
     */
    sess?: string;
    /**
     * IP address for the logs
     */
    ip?: string;
};
