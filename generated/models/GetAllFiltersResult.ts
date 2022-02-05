/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetAllFiltersResult = {
    /**
     * Filter ID
     */
    id: string;
    /**
     * User ID
     */
    user: string;
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
    /**
     * List of forwarding targets
     */
    targets?: Array<string>;
};
