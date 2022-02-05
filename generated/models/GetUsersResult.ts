/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Quota } from './Quota';

export type GetUsersResult = {
    /**
     * Users unique ID (24 byte hex)
     */
    id: string;
    /**
     * Username of the User
     */
    username: string;
    /**
     * Name of the User
     */
    name: string;
    /**
     * Main email address of the User
     */
    address: string;
    /**
     * List of tags associated with the User'
     */
    tags: Array<string>;
    /**
     * List of forwarding targets
     */
    targets: Array<string>;
    /**
     * List of enabled 2FA methods
     */
    enabled2fa: Array<string>;
    /**
     * Is autoreply enabled or not (start time may still be in the future or end time in the past)
     */
    autoreply: boolean;
    /**
     * If true then received messages are encrypted
     */
    encryptMessages: boolean;
    /**
     * If true then forwarded messages are encrypted
     */
    encryptForwarded: boolean;
    quota: Quota;
    /**
     * Custom metadata value. Included if metaData query argument was true
     */
    metaData?: any;
    /**
     * Custom metadata value for internal use. Included if internalData query argument was true and request was not made using user-role token
     */
    internalData?: any;
    /**
     * If true then the User has a password set and can authenticate
     */
    hasPasswordSet: boolean;
    /**
     * Is the account activated
     */
    activated: boolean;
    /**
     * If true then the user can not authenticate or receive any new mail
     */
    disabled: boolean;
    /**
     * If true then the user can not authenticate
     */
    suspended: boolean;
};
