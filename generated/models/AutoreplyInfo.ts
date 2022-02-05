/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Autoreply information
 */
export type AutoreplyInfo = {
    /**
     * If true, then autoreply is enabled for this address
     */
    status: boolean;
    /**
     * Name that is used for the From: header in autoreply message
     */
    name: string;
    /**
     * Autoreply subject line
     */
    subject: string;
    /**
     * Autoreply plaintext content
     */
    text: string;
    /**
     * Autoreply HTML content
     */
    html: string;
};
