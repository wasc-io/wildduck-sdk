/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SetupTotp2FAResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * Generated TOTP seed value
     */
    seed: string;
    /**
     * Base64 encoded QR code
     */
    qrcode: string;
};
