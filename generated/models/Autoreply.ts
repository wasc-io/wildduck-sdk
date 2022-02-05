/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Autoreply information
 */
export type Autoreply = {
    /**
     * If true, then autoreply is enabled for this address
     */
    status?: boolean;
    /**
     * Either a date string or boolean false to disable start time checks
     */
    start?: string;
    /**
     * Either a date string or boolean false to disable end time checks
     */
    end?: string;
    /**
     * Name that is used for the From: header in autoreply message
     */
    name?: string;
    /**
     * Autoreply subject line
     */
    subject?: string;
    /**
     * Autoreply plaintext content
     */
    text?: string;
    /**
     * Autoreply HTML content
     */
    html?: string;
};
