/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Information about public key or false if key is not available
 */
export type KeyInfo = {
    /**
     * Name listed in public key
     */
    name: string;
    /**
     * E-mail address listed in public key
     */
    address: string;
    /**
     * Fingerprint of the public key
     */
    fingerprint: string;
};
