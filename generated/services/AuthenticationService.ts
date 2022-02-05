/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthenticateRequest } from '../models/AuthenticateRequest';
import type { AuthenticateResponse } from '../models/AuthenticateResponse';
import type { GetAuthlogEventResponse } from '../models/GetAuthlogEventResponse';
import type { GetAuthlogResponse } from '../models/GetAuthlogResponse';
import type { SuccessResponse } from '../models/SuccessResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthenticationService {

    /**
     * Invalidate authentication token
     * This method invalidates currently used authentication token. If token is not provided then nothing happens
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static invalidateAccessToken(): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/authenticate',
        });
    }

    /**
     * Authenticate a User
     * @param requestBody
     * @returns AuthenticateResponse Success
     * @throws ApiError
     */
    public static authenticate(
        requestBody: AuthenticateRequest,
    ): CancelablePromise<AuthenticateResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/authenticate',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List authentication Events
     * @param user ID of the User
     * @param action Limit listing only to values with specific action value
     * @param filterIp Limit listing only to values with specific IP address
     * @param limit How many records to return
     * @param page Current page number. Informational only, page numbers start from 1
     * @param next Cursor value for next page, retrieved from nextCursor response value
     * @param previous Cursor value for previous page, retrieved from previousCursor response value
     * @returns GetAuthlogResponse Success
     * @throws ApiError
     */
    public static getAuthlog(
        user: string,
        action?: string,
        filterIp?: string,
        limit?: number,
        page?: number,
        next?: number,
        previous?: number,
    ): CancelablePromise<GetAuthlogResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user}/authlog',
            path: {
                'user': user,
            },
            query: {
                'action': action,
                'filterIp': filterIp,
                'limit': limit,
                'page': page,
                'next': next,
                'previous': previous,
            },
        });
    }

    /**
     * Request Event information
     * @param user ID of the User
     * @param event ID of the Event
     * @returns GetAuthlogEventResponse Success
     * @throws ApiError
     */
    public static getAuthlogEvent(
        user: string,
        event: string,
    ): CancelablePromise<GetAuthlogEventResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user}/authlog/{event}',
            path: {
                'user': user,
                'event': event,
            },
        });
    }

}