/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { KeyInfo } from './KeyInfo';
import type { UserLimits } from './UserLimits';

export type GetUserResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
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
     * Default retention time (in ms). false if not enabled
     */
    retention: number;
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
    /**
     * Public PGP key for the User that is used for encryption
     */
    pubKey: string;
    keyInfo: KeyInfo;
    /**
     * Custom metadata object set for this user
     */
    metaData: any;
    /**
     * Custom interna metadata object set for this user. Not available for user-role tokens
     */
    internalData: any;
    /**
     * List of forwarding targets
     */
    targets: Array<string>;
    /**
     * Relative scale for detecting spam. 0 means that everything is spam, 100 means that nothing is spam
     */
    spamLevel: number;
    limits: UserLimits;
    /**
     * List of tags associated with the User
     */
    tags: Array<string>;
    /**
     * A list of additional email addresses this user can send mail from. Wildcard is allowed.
     */
    fromWhitelist?: Array<string>;
    /**
     * Disabled scopes for this user
     */
    disabledScopes: Array<string>;
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
