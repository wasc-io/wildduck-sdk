/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressLimits } from './AddressLimits';
import type { AutoreplyInfo } from './AutoreplyInfo';

export type GetForwardedAddressResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * ID of the Address
     */
    id: string;
    /**
     * E-mail address string
     */
    address: string;
    /**
     * Identity name
     */
    name: string;
    /**
     * List of forwarding targets
     */
    targets: Array<string>;
    limits: AddressLimits;
    autoreply: AutoreplyInfo;
    /**
     * Datestring of the time the address was created
     */
    created: string;
    /**
     * List of tags associated with the Address
     */
    tags: Array<string>;
    /**
     * If true then the forwarded address is disabled
     */
    forwardedDisabled: boolean;
};
