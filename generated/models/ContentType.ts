/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Parsed Content-Type header. Usually needed to identify encrypted messages and such
 */
export type ContentType = {
    /**
     * MIME type of the message, eg. "multipart/mixed"
     */
    value: string;
    /**
     * An object with Content-Type params as key-value pairs
     */
    params: any;
};
