/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Action } from './Action';
import type { Query } from './Query';

export type UpdateFilterRequest = {
    /**
     * Name of the Filter
     */
    name?: string;
    query?: Query;
    action?: Action;
    /**
     * If true then this filter is ignored
     */
    disabled?: boolean;
};
