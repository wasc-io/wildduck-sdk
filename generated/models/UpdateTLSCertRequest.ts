/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateTLSCertRequest = {
    /**
     * Server name this TLS certificate applies to
     */
    servername: string;
    /**
     * If true then private key and certificate are managed automatically by ACME
     */
    acme?: boolean;
    /**
     * PEM formatted TLS private key. Optional if certificate is managed by ACME
     */
    privateKey?: string;
    /**
     * PEM formatted TLS certificate or a certificate bundle with concatenated certificate and CA chain. Optional if certificate is managed by ACME
     */
    cert?: string;
    /**
     * CA chain certificates. Not needed if `cert` value is a bundle
     */
    ca?: Array<string>;
    /**
     * Certificate description
     */
    description?: string;
};
