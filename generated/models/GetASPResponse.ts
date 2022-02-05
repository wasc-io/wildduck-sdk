/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LastUse } from './LastUse';

export type GetASPResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * ID of the Application Password
     */
    id: string;
    /**
     * Description
     */
    description: string;
    /**
     * Allowed scopes for the Application Password
     */
    scopes: Array<string>;
    lastUse: LastUse;
    /**
     * Datestring
     */
    created: string;
};
