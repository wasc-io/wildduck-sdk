/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetAuthlogEventResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * ID of the Event
     */
    id: string;
    /**
     * Action identifier
     */
    action: string;
    /**
     * Did the action succeed
     */
    result: string;
    /**
     * Session identifier
     */
    sess?: string;
    /**
     * IP address of the Event
     */
    ip?: string;
    /**
     * Datestring of the Event time
     */
    created: string;
};
