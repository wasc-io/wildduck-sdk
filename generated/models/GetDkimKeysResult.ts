/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetDkimKeysResult = {
    /**
     * ID of the DKIM
     */
    id: string;
    /**
     * The domain this DKIM key applies to
     */
    domain: string;
    /**
     * DKIM selector
     */
    selector: string;
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
};
