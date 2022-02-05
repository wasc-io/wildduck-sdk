/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ForwardStoredMessageRequest = {
    /**
     * Number of original forwarding target
     */
    target?: number;
    /**
     * An array of additional forward targets
     */
    addresses?: Array<string>;
};
