/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthenticateRequest = {
    /**
     * Username or E-mail address
     */
    username: string;
    /**
     * Password
     */
    password: string;
    /**
     * Application identifier for security logs
     */
    protocol?: string;
    /**
     * Required scope. One of master, imap, smtp, pop3
     */
    scope?: string;
    /**
     * If true then generates a temporary access token that is valid for this user. Only available if scope is "master". When using user tokens then you can replace user ID in URLs with "me".
     */
    token?: boolean;
    /**
     * Session identifier for the logs
     */
    sess?: string;
    /**
     * IP address for the logs
     */
    ip?: string;
};
