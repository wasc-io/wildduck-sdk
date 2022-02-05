/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetFiltersResult = {
    /**
     * Filter ID
     */
    id: string;
    /**
     * Name for the filter
     */
    name: string;
    /**
     * Datestring of the time the filter was created
     */
    created: string;
    query: Array<Array<string>>;
    action: Array<Array<string>>;
    /**
     * If true, then this filter is ignored
     */
    disabled: boolean;
};
