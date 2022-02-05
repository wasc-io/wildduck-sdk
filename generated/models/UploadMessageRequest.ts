/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { AddressOptionalName } from './AddressOptionalName';
import type { AttachmentsUpload } from './AttachmentsUpload';
import type { Header } from './Header';
import type { ReferenceWithAttachments } from './ReferenceWithAttachments';

export type UploadMessageRequest = {
    /**
     * Is the message unseen or not
     */
    unseen?: boolean;
    /**
     * Is the message a draft or not
     */
    draft?: boolean;
    /**
     * Is the message flagged or not
     */
    flagged?: boolean;
    /**
     * base64 encoded message source. Alternatively, you can provide this value as POST body by using message/rfc822 MIME type. If raw message is provided then it overrides any other mail configuration
     */
    raw?: string;
    from?: Address;
    /**
     * Addresses for the To: header
     */
    to?: Array<AddressOptionalName>;
    /**
     * Addresses for the Cc: header
     */
    cc?: Array<AddressOptionalName>;
    /**
     * Addresses for the Bcc: header
     */
    bcc?: Array<AddressOptionalName>;
    /**
     * Message subject. If not then resolved from Reference message
     */
    subject?: string;
    /**
     * Plaintext message
     */
    text?: string;
    /**
     * HTML formatted message
     */
    html?: string;
    /**
     * Custom headers for the message. If reference message is set then In-Reply-To and References headers are set  automaticall y
     */
    headers?: Array<Header>;
    /**
     * Attachments as storage file IDs. NB! When retrieving message info then an array of objects is returned. When uploading a message then an array of IDs is used.
     */
    files?: Array<string>;
    /**
     * Attachments for the message
     */
    attachments?: Array<AttachmentsUpload>;
    /**
     * Optional metadata, must be an object or JSON formatted string
     */
    metaData?: string;
    reference?: ReferenceWithAttachments;
    /**
     * If set, then deletes a previous message when storing the new one. Useful when uploading a new Draft message.
     */
    replacePrevious?: {
        /**
         * Mailbox ID. Defaults to the mailbox of the uploaded message.
         */
        mailbox?: string;
        /**
         * Message ID in Mailbox
         */
        id: number;
    };
    /**
     * Session identifier for the logs
     */
    sess?: string;
    /**
     * IP address for the logs
     */
    ip?: string;
};
