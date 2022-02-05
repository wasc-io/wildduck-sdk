/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { AddressOptionalName } from './AddressOptionalName';
import type { AttachmentsUpload } from './AttachmentsUpload';
import type { EnvelopeUpload } from './EnvelopeUpload';
import type { Header } from './Header';
import type { Reference } from './Reference';

export type SubmitMessageRequest = {
    reference?: Reference;
    /**
     * Mailbox ID where to upload the message. If not set then message is uploaded to Sent Mail folder.
     */
    mailbox?: string;
    /**
     * If true then generated message is not added to the sending queue
     */
    uploadOnly?: boolean;
    /**
     * If true then treats this message as draft (should be used with uploadOnly=true)
     */
    isDraft?: boolean;
    /**
     * Datestring for delivery if message should be sent some later time
     */
    sendTime?: string;
    envelope?: EnvelopeUpload;
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
    subject: string;
    /**
     * Plaintext message
     */
    text: string;
    /**
     * HTML formatted message
     */
    html: string;
    /**
     * Custom headers for the message. If reference message is set then In-Reply-To and References headers are set automatically
     */
    headers?: Array<Header>;
    /**
     * Attachments for the message
     */
    attachments?: Array<AttachmentsUpload>;
    /**
     * Custom metainfo for the message
     */
    meta?: any;
    /**
     * Session identifier for the logs
     */
    sess?: string;
    /**
     * IP address for the logs
     */
    ip?: string;
};
