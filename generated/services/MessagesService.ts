/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteMessagesInMailboxResponse } from '../models/DeleteMessagesInMailboxResponse';
import type { ForwardStoredMessageRequest } from '../models/ForwardStoredMessageRequest';
import type { ForwardStoredMessageResponse } from '../models/ForwardStoredMessageResponse';
import type { GetMessageResponse } from '../models/GetMessageResponse';
import type { GetMessagesResponse } from '../models/GetMessagesResponse';
import type { SearchMessagesResponse } from '../models/SearchMessagesResponse';
import type { SubmitStoredMessageRequest } from '../models/SubmitStoredMessageRequest';
import type { SubmitStoredMessageResponse } from '../models/SubmitStoredMessageResponse';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { UpdateMessageRequest } from '../models/UpdateMessageRequest';
import type { UpdateMessageResponse } from '../models/UpdateMessageResponse';
import type { UploadMessageRequest } from '../models/UploadMessageRequest';
import type { UploadMessageResponse } from '../models/UploadMessageResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MessagesService {

    /**
     * Delete a Message
     * @param user ID of the User
     * @param mailbox ID of the Mailbox
     * @param message Message ID
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static deleteMessage(
        user: string,
        mailbox: string,
        message: number,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{user}/mailboxes/{mailbox}/messages/{message}',
            path: {
                'user': user,
                'mailbox': mailbox,
                'message': message,
            },
        });
    }

    /**
     * Request Message information
     * @param user ID of the User
     * @param mailbox ID of the Mailbox
     * @param message Message ID
     * @param markAsSeen If true then marks message as seen
     * @returns GetMessageResponse Success
     * @throws ApiError
     */
    public static getMessage(
        user: string,
        mailbox: string,
        message: number,
        markAsSeen?: boolean,
    ): CancelablePromise<GetMessageResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user}/mailboxes/{mailbox}/messages/{message}',
            path: {
                'user': user,
                'mailbox': mailbox,
                'message': message,
            },
            query: {
                'markAsSeen': markAsSeen,
            },
        });
    }

    /**
     * Delete all Messages from a Mailbox
     * @param user ID of the User
     * @param mailbox ID of the Mailbox
     * @param async Schedule deletion task
     * @returns DeleteMessagesInMailboxResponse Success
     * @throws ApiError
     */
    public static deleteMessagesInMailbox(
        user: string,
        mailbox: string,
        async: boolean = false,
    ): CancelablePromise<DeleteMessagesInMailboxResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{user}/mailboxes/{mailbox}/messages',
            path: {
                'user': user,
                'mailbox': mailbox,
            },
            query: {
                'async': async,
            },
        });
    }

    /**
     * List messages in a Mailbox
     * @param user ID of the User
     * @param mailbox ID of the Mailbox
     * @param unseen If true, then returns only unseen messages
     * @param metaData If true, then includes metaData in the response
     * @param threadCounters If true, then includes threadMessageCount in the response. Counters come with some overhead
     * @param limit How many records to return
     * @param page Current page number. Informational only, page numbers start from 1
     * @param order Ordering of the records by insert date
     * @param next Cursor value for next page, retrieved from nextCursor response value
     * @param previous Cursor value for previous page, retrieved from previousCursor response value
     * @returns GetMessagesResponse Success
     * @throws ApiError
     */
    public static getMessages(
        user: string,
        mailbox: string,
        unseen?: number,
        metaData?: boolean,
        threadCounters?: boolean,
        limit?: number,
        page?: number,
        order?: number,
        next?: number,
        previous?: number,
    ): CancelablePromise<GetMessagesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user}/mailboxes/{mailbox}/messages',
            path: {
                'user': user,
                'mailbox': mailbox,
            },
            query: {
                'unseen': unseen,
                'metaData': metaData,
                'threadCounters': threadCounters,
                'limit': limit,
                'page': page,
                'order': order,
                'next': next,
                'previous': previous,
            },
        });
    }

    /**
     * Update Message information
     * This method updates message flags and also allows to move messages to a different mailbox
     * @param user ID of the User
     * @param mailbox ID of the Mailbox
     * @param requestBody
     * @returns UpdateMessageResponse Success
     * @throws ApiError
     */
    public static updateMessage(
        user: string,
        mailbox: string,
        requestBody: UpdateMessageRequest,
    ): CancelablePromise<UpdateMessageResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{user}/mailboxes/{mailbox}/messages',
            path: {
                'user': user,
                'mailbox': mailbox,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Upload Message
     * This method allows to upload either an RFC822 formatted message or a message structure to a mailbox. Raw message is stored unmodified, no headers are added or removed. If you want to generate the uploaded message from structured data fields, then do not use the raw property.
     * @param user ID of the User
     * @param mailbox ID of the Mailbox
     * @param requestBody
     * @returns UploadMessageResponse Success
     * @throws ApiError
     */
    public static uploadMessage(
        user: string,
        mailbox: string,
        requestBody: UploadMessageRequest,
    ): CancelablePromise<UploadMessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{user}/mailboxes/{mailbox}/messages',
            path: {
                'user': user,
                'mailbox': mailbox,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Forward stored Message
     * This method allows either to re-forward a message to an original forward target or forward it to some other address. This is useful if a user had forwarding turned on but the message was not delivered so you can try again. Forwarding does not modify the original message.
     * @param user ID of the User
     * @param mailbox ID of the Mailbox
     * @param message Message ID
     * @param requestBody This method allows either to re-forward a message to an original forward target or forward it to some other address. This is useful if a user had forwarding turned on but the message was not delivered so you can try again. Forwarding does not modify the original message.
     * @returns ForwardStoredMessageResponse Success
     * @throws ApiError
     */
    public static forwardStoredMessage(
        user: string,
        mailbox: string,
        message: number,
        requestBody: ForwardStoredMessageRequest,
    ): CancelablePromise<ForwardStoredMessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{user}/mailboxes/{mailbox}/messages/{message}/forward',
            path: {
                'user': user,
                'mailbox': mailbox,
                'message': message,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Download Attachment
     * This method returns attachment file contents in binary form
     * @param user ID of the User
     * @param mailbox ID of the Mailbox
     * @param message ID of the Message
     * @param attachment ID of the Attachment
     * @returns binary Success
     * @throws ApiError
     */
    public static getMessageAttachment(
        user: string,
        mailbox: string,
        message: number,
        attachment: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user}/mailboxes/{mailbox}/messages/{message}/attachments/{attachment}',
            path: {
                'user': user,
                'mailbox': mailbox,
                'message': message,
                'attachment': attachment,
            },
        });
    }

    /**
     * Get Message source
     * This method returns the full RFC822 formatted source of the stored message
     * @param user ID of the User
     * @param mailbox ID of the Mailbox
     * @param message ID of the Message
     * @returns any Success
     * @throws ApiError
     */
    public static getMessageSource(
        user: string,
        mailbox: string,
        message: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user}/mailboxes/{mailbox}/messages/{message}/message.eml',
            path: {
                'user': user,
                'mailbox': mailbox,
                'message': message,
            },
        });
    }

    /**
     * Delete an Outbound Message
     * You can delete outbound emails that are still in queue. Queue ID can be found from the `outbound` property of a stored email.
     * @param user ID of the User
     * @param queueId Outbound queue ID of the message
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static deleteOutboundMessage(
        user: string,
        queueId: string,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{user}/outbound/{queueId}',
            path: {
                'user': user,
                'queueId': queueId,
            },
        });
    }

    /**
     * Search for messages
     * @param user ID of the User
     * @param mailbox ID of the Mailbox
     * @param thread Thread ID
     * @param query Search string, uses MongoDB fulltext index. Covers data from mesage body and also common headers like from, to, subject etc.
     * @param datestart Datestring for the earliest message storing time
     * @param dateend Datestring for the latest message storing time
     * @param from Partial match for the From: header line
     * @param to Partial match for the To: and Cc: header lines
     * @param subject Partial match for the Subject: header line
     * @param attachments If true, then matches only messages with attachments
     * @param flagged If true, then matches only messages with \Flagged flags
     * @param unseen If true, then matches only messages without \Seen flags
     * @param searchable If true, then matches messages not in Junk or Trash
     * @param orQuery Search string, uses MongoDB fulltext index. Covers data from mesage body and also common headers like from, to, subject etc.
     * @param orFrom Partial match for the From: header line
     * @param orTo Partial match for the To: and Cc: header lines
     * @param orSubject Partial match for the Subject: header line
     * @param minSize Minimal message size in bytes
     * @param maxSize Maximal message size in bytes
     * @param threadCounters If true, then includes threadMessageCount in the response. Counters come with some overhead
     * @param limit How many records to return
     * @param page Current page number. Informational only, page numbers start from 1
     * @param next Cursor value for next page, retrieved from nextCursor response value
     * @param previous Cursor value for previous page, retrieved from previousCursor response value
     * @returns SearchMessagesResponse Success
     * @throws ApiError
     */
    public static searchMessages(
        user: string,
        mailbox?: string,
        thread?: string,
        query?: string,
        datestart?: string,
        dateend?: string,
        from?: string,
        to?: string,
        subject?: string,
        attachments?: boolean,
        flagged?: boolean,
        unseen?: boolean,
        searchable?: boolean,
        orQuery?: string,
        orFrom?: string,
        orTo?: string,
        orSubject?: string,
        minSize?: number,
        maxSize?: number,
        threadCounters?: boolean,
        limit?: number,
        page?: number,
        next?: number,
        previous?: number,
    ): CancelablePromise<SearchMessagesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user}/search',
            path: {
                'user': user,
            },
            query: {
                'mailbox': mailbox,
                'thread': thread,
                'query': query,
                'datestart': datestart,
                'dateend': dateend,
                'from': from,
                'to': to,
                'subject': subject,
                'attachments': attachments,
                'flagged': flagged,
                'unseen': unseen,
                'searchable': searchable,
                'or.query': orQuery,
                'or.from': orFrom,
                'or.to': orTo,
                'or.subject': orSubject,
                'minSize': minSize,
                'maxSize': maxSize,
                'threadCounters': threadCounters,
                'limit': limit,
                'page': page,
                'next': next,
                'previous': previous,
            },
        });
    }

    /**
     * Submit Draft for delivery
     * This method allows to submit a draft message for delivery. Draft is moved to Sent mail folder.
     * @param user ID of the User
     * @param mailbox ID of the Mailbox
     * @param message Message ID
     * @param requestBody This method allows to submit a draft message for delivery. Draft is moved to Sent mail folder.
     * @returns SubmitStoredMessageResponse Success
     * @throws ApiError
     */
    public static submitStoredMessage(
        user: string,
        mailbox: string,
        message: number,
        requestBody: SubmitStoredMessageRequest,
    ): CancelablePromise<SubmitStoredMessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{user}/mailboxes/{mailbox}/messages/{message}/submit',
            path: {
                'user': user,
                'mailbox': mailbox,
                'message': message,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}