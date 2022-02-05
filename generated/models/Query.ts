/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Rules that a message must match
 */
export type Query = {
    /**
     * Partial match for the From: header (case insensitive)
     */
    from?: string;
    /**
     * Partial match for the To:/Cc: headers (case insensitive)
     */
    to?: string;
    /**
     * Partial match for the Subject: header (case insensitive)
     */
    subject?: string;
    /**
     * Partial match for the List-ID: header (case insensitive)
     */
    listId?: string;
    /**
     * Fulltext search against message text
     */
    text?: string;
    /**
     * Does a message have to have an attachment or not
     */
    ha?: boolean;
    /**
     * Message size in bytes. If the value is a positive number then message needs to be larger, if negative then message needs to be smaller than abs(size) value
     */
    size?: number;
};
