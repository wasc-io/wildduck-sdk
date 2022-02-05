/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetTLSCertResult = {
    /**
     * ID of the certificate
     */
    id: string;
    /**
     * The server name this certificate applies to
     */
    servername: string;
    /**
     * If true then private key and certificate are managed automatically by ACME
     */
    acme?: boolean;
    /**
     * Key description
     */
    description: string;
    /**
     * Key fingerprint (SHA1)
     */
    fingerprint: string;
    /**
     * Datestring
     */
    created: string;
    /**
     * Certificate expiration time
     */
    expires?: string;
    /**
     * SAN servernames listed in the certificate
     */
    altNames?: Array<string>;
};
