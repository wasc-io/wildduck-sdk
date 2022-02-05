/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetAllowedDomainResult } from './GetAllowedDomainResult';

export type GetAllowedDomainResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * Domain list
     */
    results: Array<GetAllowedDomainResult>;
};
