/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateMailboxRequest } from '../models/CreateMailboxRequest';
import type { CreateMailboxResponse } from '../models/CreateMailboxResponse';
import type { GetMailboxesResponse } from '../models/GetMailboxesResponse';
import type { GetMailboxResponse } from '../models/GetMailboxResponse';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { UpdateMailboxRequest } from '../models/UpdateMailboxRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MailboxesService {

    /**
     * Delete a Mailbox
     * @param user Users unique ID
     * @param mailbox Mailbox unique ID. Special use folders and INBOX can not be deleted
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static deleteMailbox(
        user: string,
        mailbox: string,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{user}/mailboxes/{mailbox}',
            path: {
                'user': user,
                'mailbox': mailbox,
            },
        });
    }

    /**
     * Request Mailbox information
     * @param user Users unique ID
     * @param mailbox Mailbox unique ID. Special use folders and INBOX can not be deleted
     * @returns GetMailboxResponse Success
     * @throws ApiError
     */
    public static getMailbox(
        user: string,
        mailbox: string,
    ): CancelablePromise<GetMailboxResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user}/mailboxes/{mailbox}',
            path: {
                'user': user,
                'mailbox': mailbox,
            },
        });
    }

    /**
     * Update Mailbox information
     * @param user Users unique ID
     * @param mailbox Mailbox unique ID. Special use folders and INBOX can not be deleted
     * @param requestBody
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static updateMailbox(
        user: string,
        mailbox: string,
        requestBody: UpdateMailboxRequest,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{user}/mailboxes/{mailbox}',
            path: {
                'user': user,
                'mailbox': mailbox,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List Mailboxes for a User
     * @param user Users unique ID
     * @param specialUse Should the response include only folders with specialUse flag set.
     * @param showHidden Hidden folders are not included in the listing by default.
     * @param counters Should the response include counters (total + unseen). Counters come with some overhead.
     * @param sizes Should the response include mailbox size in bytes. Size numbers come with a lot of overhead as an aggregated query is ran.
     * @returns GetMailboxesResponse Success
     * @throws ApiError
     */
    public static getMailboxes(
        user: string,
        specialUse?: boolean,
        showHidden?: boolean,
        counters?: boolean,
        sizes?: boolean,
    ): CancelablePromise<GetMailboxesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user}/mailboxes',
            path: {
                'user': user,
            },
            query: {
                'specialUse': specialUse,
                'showHidden': showHidden,
                'counters': counters,
                'sizes': sizes,
            },
        });
    }

    /**
     * Create new Mailbox
     * @param user Users unique ID
     * @param requestBody
     * @returns CreateMailboxResponse Success
     * @throws ApiError
     */
    public static createMailbox(
        user: string,
        requestBody: CreateMailboxRequest,
    ): CancelablePromise<CreateMailboxResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{user}/mailboxes',
            path: {
                'user': user,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}