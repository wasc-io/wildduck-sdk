/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetUserAddressesResult } from './GetUserAddressesResult';

export type GetUserAddressesResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * Address listing
     */
    results: Array<GetUserAddressesResult>;
};
