/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateWebhookRequest = {
    /**
     * An array of event types to match. For prefix match use ".*" at the end (eg. "user.*") or "*" for all types
     */
    type: Array<string>;
    /**
     * User ID to match (only makes sense for user specific resources)
     */
    user?: string;
    /**
     * URL to POST data to
     */
    url: string;
};
