/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Forwarded } from './Forwarded';

export type ForwardStoredMessageResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * Message ID in outbound queue
     */
    queueId: string;
    /**
     * Information about forwarding targets
     */
    forwarded: Array<Forwarded>;
};
