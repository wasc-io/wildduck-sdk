/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressLimits } from './AddressLimits';
import type { AutoreplyInfo } from './AutoreplyInfo';

export type ResolveAddressResponse = {
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
     * ID of the user if the address belongs to a User
     */
    user: string;
    /**
     * List of forwarding targets if this is a Forwarded address
     */
    targets: Array<string>;
    limits: AddressLimits;
    autoreply: AutoreplyInfo;
    /**
     * List of tags associated with the Address
     */
    tags: Array<string>;
    /**
     * Datestring of the time the address was created
     */
    created: string;
};
