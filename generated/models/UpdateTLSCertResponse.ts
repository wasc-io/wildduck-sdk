/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateTLSCertResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * ID of the certificate
     */
    id: string;
    /**
     * The server name this certificate applies to
     */
    servername: string;
    /**
     * Key description
     */
    description?: string;
    /**
     * Key fingerprint (SHA1)
     */
    fingerprint: string;
    /**
     * Certificate expiration time
     */
    expires?: string;
    /**
     * SAN servernames listed in the certificate
     */
    altNames?: Array<string>;
};
