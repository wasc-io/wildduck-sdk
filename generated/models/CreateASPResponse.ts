/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateASPResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * ID of the Application Password
     */
    id: string;
    /**
     * Application Specific Password. Generated password is whitespace agnostic, so it could be displayed to the client as "abcd efgh ijkl mnop" instead of "abcdefghijklmnop"
     */
    password: string;
    /**
     * Base64 encoded mobileconfig file. Generated profile file should be sent to the client with Content-Type value of application/x-apple-aspen-config.
     */
    mobileconfig: string;
};
