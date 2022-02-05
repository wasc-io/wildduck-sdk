/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetAddressesResult } from './GetAddressesResult';

export type GetAddressesResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * How many results were found
     */
    total: number;
    /**
     * Current page number. Derived from page query argument
     */
    page: number;
    /**
     * Either a cursor string or false if there are not any previous results
     */
    previousCursor: string;
    /**
     * Either a cursor string or false if there are not any next results
     */
    nextCursor: string;
    /**
     * Address listing
     */
    results: Array<GetAddressesResult>;
};
