/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Message } from './Message';

export type SubmitStoredMessageResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * Message ID in outbound queue
     */
    queueId: string;
    message?: Message;
};
