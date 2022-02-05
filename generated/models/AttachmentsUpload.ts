/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AttachmentsUpload = {
    /**
     * Base64 encoded attachment content
     */
    content: string;
    /**
     * Attachment filename
     */
    filename?: string;
    /**
     * MIME type for the attachment file
     */
    contentType?: string;
    /**
     * Content-ID value if you want to reference to this attachment from HTML formatted message
     */
    cid?: string;
};
