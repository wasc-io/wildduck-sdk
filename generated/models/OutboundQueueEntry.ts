/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OutboundQueueEntry = {
    /**
     * Queue target ID
     */
    seq: string;
    /**
     * Target recipient
     */
    recipient: string;
    /**
     * Zone ID in ZoneMTA
     */
    sendingZone?: string;
    /**
     * ISO Date of the expected delivery time
     */
    queued?: string;
};
