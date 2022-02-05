/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Rcpt } from './Rcpt';

/**
 * SMTP envelope (if available)
 */
export type Envelope = {
    /**
     * Address from MAIL FROM
     */
    from: string;
    rcpt: Rcpt;
};
