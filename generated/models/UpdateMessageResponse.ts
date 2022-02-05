/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateMessageResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * If messages were moved then lists new ID values. Array entry is an array with first element pointing to old ID and second to new ID
     */
    id: Array<any>;
    /**
     * If messages were not moved, then indicates the number of updated messages
     */
    updated: number;
};
