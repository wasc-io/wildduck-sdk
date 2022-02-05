/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetASPsResult } from './GetASPsResult';

export type GetASPsResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * Event listing
     */
    results: Array<GetASPsResult>;
};
