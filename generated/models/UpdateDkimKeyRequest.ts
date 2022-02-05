/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateDkimKeyRequest = {
    /**
     * Domain name this DKIM key applies to. Use "*" as a special value that will be used for domains that do not have their own DKIM key set
     */
    domain: string;
    /**
     * Selector for the key
     */
    selector: string;
    /**
     * Key description
     */
    description?: string;
    /**
     * Pem formatted DKIM private key. If not set then a new 2048 bit RSA key is generated, beware though that it can take several seconds to complete.
     */
    privateKey?: string;
};
