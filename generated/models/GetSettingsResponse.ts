/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetSettingsResult } from './GetSettingsResult';

export type GetSettingsResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * Partial match if requested
     */
    filter?: string;
    /**
     * Setting listing
     */
    settings: Array<GetSettingsResult>;
};
