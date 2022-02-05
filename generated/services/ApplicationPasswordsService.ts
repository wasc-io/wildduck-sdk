/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateASPRequest } from '../models/CreateASPRequest';
import type { CreateASPResponse } from '../models/CreateASPResponse';
import type { GetASPResponse } from '../models/GetASPResponse';
import type { GetASPsResponse } from '../models/GetASPsResponse';
import type { SuccessResponse } from '../models/SuccessResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ApplicationPasswordsService {

    /**
     * Delete an Application Password
     * @param user ID of the User
     * @param asp ID of the Application Password
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static deleteAsp(
        user: string,
        asp: string,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{user}/asps/{asp}',
            path: {
                'user': user,
                'asp': asp,
            },
        });
    }

    /**
     * Request ASP information
     * @param user ID of the User
     * @param asp ID of the Application Password
     * @returns GetASPResponse Success
     * @throws ApiError
     */
    public static getAsp(
        user: string,
        asp: string,
    ): CancelablePromise<GetASPResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user}/asps/{asp}',
            path: {
                'user': user,
                'asp': asp,
            },
        });
    }

    /**
     * List Application Passwords
     * @param user ID of the User
     * @param showAll If not true then skips entries with a TTL set
     * @returns GetASPsResponse Success
     * @throws ApiError
     */
    public static getAsPs(
        user: string,
        showAll?: boolean,
    ): CancelablePromise<GetASPsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user}/asps',
            path: {
                'user': user,
            },
            query: {
                'showAll': showAll,
            },
        });
    }

    /**
     * Create new Application Password
     * @param user ID of the User
     * @param requestBody
     * @returns CreateASPResponse Success
     * @throws ApiError
     */
    public static createAsp(
        user: string,
        requestBody: CreateASPRequest,
    ): CancelablePromise<CreateASPResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{user}/asps',
            path: {
                'user': user,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}