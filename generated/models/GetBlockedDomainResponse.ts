/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetBlockedDomainResult } from './GetBlockedDomainResult';

export type GetBlockedDomainResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * Domain list
     */
    results: Array<GetBlockedDomainResult>;
};
