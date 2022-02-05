/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * List of attachments for this message
 */
export type Attachments = {
    /**
     * Attachment ID
     */
    id: string;
    /**
     * SHA-256 hash of the contents of the attachment
     */
    hash?: string;
    /**
     * Filename of the attachment
     */
    filename: string;
    /**
     * MIME type
     */
    contentType: string;
    /**
     * Attachment disposition
     */
    disposition: string;
    /**
     * Which transfer encoding was used (actual content when fetching attachments is not encoded)
     */
    transferEncoding: string;
    /**
     * Was this attachment found from a multipart/related node. This usually means that this is an embedded image
     */
    related: boolean;
    /**
     * Approximate size of the attachment in kilobytes
     */
    sizeKb: number;
};
