/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * List of files added to this message as attachments. Applies to Drafts, normal messages do not have this property. Needed to prevent uploading the same attachment every time a draft is updated
 */
export type Files = {
    /**
     * File ID
     */
    id: string;
    /**
     * Filename of the attached file
     */
    filename: string;
    /**
     * MIME type
     */
    contentType: string;
    /**
     * MIME type
     */
    size: number;
};
