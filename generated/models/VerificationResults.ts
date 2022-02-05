/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Tls } from './Tls';

/**
 * Security verification info if message was received from MX. If this property is missing then do not automatically assume invalid TLS, SPF or DKIM.
 */
export type VerificationResults = {
    tls: Tls;
    /**
     * Domain name (either MFROM or HELO) of verified SPF or false if no SPF match was found
     */
    spf: any;
    /**
     * Domain name of verified DKIM signature or false if no valid signature was found
     */
    dkim: any;
};
