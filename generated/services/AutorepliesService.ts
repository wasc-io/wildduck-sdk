/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetAutoreplyResponse } from '../models/GetAutoreplyResponse';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { UpdateAutoreplyRequest } from '../models/UpdateAutoreplyRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AutorepliesService {

    /**
     * Delete Autoreply information
     * @param user ID of the User
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static deleteAutoreply(
        user: string,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{user}/autoreply',
            path: {
                'user': user,
            },
        });
    }

    /**
     * Request Autoreply information
     * @param user ID of the User
     * @returns GetAutoreplyResponse Success
     * @throws ApiError
     */
    public static getAutoreply(
        user: string,
    ): CancelablePromise<GetAutoreplyResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user}/autoreply',
            path: {
                'user': user,
            },
        });
    }

    /**
     * Update Autoreply information
     * @param user ID of the User
     * @param requestBody
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static updateAutoreply(
        user: string,
        requestBody: UpdateAutoreplyRequest,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{user}/autoreply',
            path: {
                'user': user,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}