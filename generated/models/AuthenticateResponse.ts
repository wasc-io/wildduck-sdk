/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthenticateResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * ID of authenticated User
     */
    id: string;
    /**
     * Username of authenticated User
     */
    username: string;
    /**
     * The scope this authentication is valid for
     */
    scope: string;
    /**
     * List of enabled 2FA mechanisms
     */
    require2fa: Array<string>;
    /**
     * Indicates if account hassword has been reset and should be replaced
     */
    requirePasswordChange: boolean;
    /**
     * If access token was requested then this is the value to use as access token when making API requests on behalf of logged in user.
     */
    token?: string;
};
