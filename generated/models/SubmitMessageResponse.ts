/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MessageWithQueueId } from './MessageWithQueueId';

export type SubmitMessageResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    message: MessageWithQueueId;
};
