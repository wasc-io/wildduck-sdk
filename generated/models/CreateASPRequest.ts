/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateASPRequest = {
    /**
     * Description
     */
    description: string;
    /**
     * List of scopes this Password applies to. Special scope "*" indicates that this password can be used for any scope except "master"
     */
    scopes: Array<string>;
    /**
     * If true then result contains a mobileconfig formatted file with account config
     */
    generateMobileconfig?: boolean;
    /**
     * E-mail address to be used as the account address in mobileconfig file. Must be one of the listed identity addresses of the user. Defaults to the main address of the user
     */
    address?: string;
    /**
     * Optional pregenerated password. Must be 16 characters, latin letters only.
     */
    password?: string;
    /**
     * TTL in seconds for this password. Every time password is used, TTL is reset to this value
     */
    ttl?: number;
    /**
     * Session identifier for the logs
     */
    sess?: string;
    /**
     * IP address for the logs
     */
    ip?: string;
};
