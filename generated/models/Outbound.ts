/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OutboundQueueEntry } from './OutboundQueueEntry';

export type Outbound = {
    /**
     * Queue ID
     */
    queueId: string;
    /**
     * Queued recipients
     */
    entries: Array<OutboundQueueEntry>;
};
