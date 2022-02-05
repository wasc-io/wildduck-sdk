/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetMailboxesResult } from './GetMailboxesResult';

export type GetMailboxesResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * List of user mailboxes
     */
    results: Array<GetMailboxesResult>;
};
