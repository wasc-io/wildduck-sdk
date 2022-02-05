/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateWebhookRequest } from '../models/CreateWebhookRequest';
import type { CreateWebhookResponse } from '../models/CreateWebhookResponse';
import type { GetWebhooksResponse } from '../models/GetWebhooksResponse';
import type { SuccessResponse } from '../models/SuccessResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WebhooksService {

    /**
     * Delete a webhook
     * @param webhook ID of the Webhook
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static deleteWebhook(
        webhook: string,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/webhooks/{webhook}',
            path: {
                'webhook': webhook,
            },
        });
    }

    /**
     * List registered Webhooks
     * @param type Prefix or exact match. Prefix match must end with ".*", eg "channel.*". Use "*" for all types
     * @param user User ID
     * @param limit How many records to return
     * @param page Current page number. Informational only, page numbers start from 1
     * @param next Cursor value for next page, retrieved from nextCursor response value
     * @param previous Cursor value for previous page, retrieved from previousCursor response value
     * @returns GetWebhooksResponse Success
     * @throws ApiError
     */
    public static getWebhooks(
        type: string,
        user?: string,
        limit?: number,
        page?: number,
        next?: number,
        previous?: number,
    ): CancelablePromise<GetWebhooksResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/webhooks',
            query: {
                'type': type,
                'user': user,
                'limit': limit,
                'page': page,
                'next': next,
                'previous': previous,
            },
        });
    }

    /**
     * Create new Webhook
     * Create new webhook
     * @param requestBody Create new webhook
     * @returns CreateWebhookResponse Success
     * @throws ApiError
     */
    public static createWebhook(
        requestBody: CreateWebhookRequest,
    ): CancelablePromise<CreateWebhookResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/webhooks',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}