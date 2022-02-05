/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Message } from './Message';

export type UploadMessageResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    message: Message;
    /**
     * Set if replacing a previous message was requested
     */
    previousDeleted?: boolean;
};
