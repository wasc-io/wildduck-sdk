/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetUserAddressesregisterResult } from './GetUserAddressesregisterResult';

export type GetUserAddressesregisterResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * Address listing
     */
    results: Array<GetUserAddressesregisterResult>;
};
