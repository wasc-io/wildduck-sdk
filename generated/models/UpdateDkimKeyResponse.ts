/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DnsTxt } from './DnsTxt';

export type UpdateDkimKeyResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
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
     * Public key in DNS format (no prefix/suffix, single line)
     */
    publicKey: string;
    dnsTxt: DnsTxt;
};
