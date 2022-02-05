/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressOptionalName } from './AddressOptionalName';

/**
 * SMTP envelope. If not provided then resolved either from message headers or from referenced message
 */
export type EnvelopeUpload = {
    from?: AddressOptionalName;
    /**
     * Recipients information
     */
    to?: Array<AddressOptionalName>;
};
