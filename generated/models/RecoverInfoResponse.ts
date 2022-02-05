/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RecoverInfoResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * ID of the deleted User
     */
    user: string;
    /**
     * Username of the User
     */
    username: string;
    /**
     * Calculated quota usage for the user
     */
    storageUsed: number;
    /**
     * List of tags associated with the User
     */
    tags: Array<string>;
    /**
     * Datestring of the time the user was deleted
     */
    deleted: string;
    /**
     * List of email addresses that can be restored
     */
    recoverableAddresses: Array<string>;
};
