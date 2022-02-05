/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetFiltersResult } from './GetFiltersResult';

export type GetFiltersResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * Filter description
     */
    results: Array<GetFiltersResult>;
};
