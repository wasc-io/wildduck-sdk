/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubmitStoredMessageRequest = {
    /**
     * If true then deletes attachment files listed in metaData.files array
     */
    deleteFiles?: boolean;
    /**
     * Datestring for delivery if message should be sent some later time
     */
    sendTime?: string;
};
