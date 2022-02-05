/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetArchivedMessagesResponse } from '../models/GetArchivedMessagesResponse';
import type { RestoreMessageRequest } from '../models/RestoreMessageRequest';
import type { RestoreMessageResponse } from '../models/RestoreMessageResponse';
import type { RestoreMessagesRequest } from '../models/RestoreMessagesRequest';
import type { SuccessResponse } from '../models/SuccessResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ArchiveService {

    /**
     * List archived messages
     * Archive contains all recently deleted messages besides Drafts etc.
     * @param user ID of the User
     * @param limit How many records to return
     * @param page Current page number. Informational only, page numbers start from 1
     * @param order Ordering of the records by insert date
     * @param next Cursor value for next page, retrieved from nextCursor response value
     * @param previous Cursor value for previous page, retrieved from previousCursor response value
     * @returns GetArchivedMessagesResponse Success
     * @throws ApiError
     */
    public static getArchivedMessages(
        user: string,
        limit?: number,
        page?: number,
        order?: number,
        next?: number,
        previous?: number,
    ): CancelablePromise<GetArchivedMessagesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user}/archived/messages',
            path: {
                'user': user,
            },
            query: {
                'limit': limit,
                'page': page,
                'order': order,
                'next': next,
                'previous': previous,
            },
        });
    }

    /**
     * Restore archived Message
     * Restores a single archived message by moving it back to the mailbox it was deleted from or to provided target mailbox. If target mailbox does not exist, then the message is moved to INBOX.
     * @param user ID of the User
     * @param message Message ID
     * @param requestBody
     * @returns RestoreMessageResponse Success
     * @throws ApiError
     */
    public static restoreMessage(
        user: string,
        message: number,
        requestBody?: RestoreMessageRequest,
    ): CancelablePromise<RestoreMessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{user}/archived/messages/{message}/restore',
            path: {
                'user': user,
                'message': message,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Restore archived messages
     * Initiates a restore task to move archived messages of a date range back to the mailboxes the messages were deleted from. If target mailbox does not exist, then the messages are moved to INBOX.
     * @param user ID of the User
     * @param requestBody
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static restoreMessages(
        user: string,
        requestBody: RestoreMessagesRequest,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{user}/archived/restore',
            path: {
                'user': user,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}