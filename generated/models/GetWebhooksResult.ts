/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetWebhooksResult = {
    /**
     * Webhooks unique ID (24 byte hex)
     */
    id: string;
    /**
     * An array of event types this webhook matches
     */
    type: Array<string>;
    /**
     * User ID or null
     */
    user: string;
    /**
     * Webhook URL
     */
    url: string;
};
