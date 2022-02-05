/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateFilterRequest } from '../models/CreateFilterRequest';
import type { GetAllFiltersResponse } from '../models/GetAllFiltersResponse';
import type { GetFilterResponse } from '../models/GetFilterResponse';
import type { GetFiltersResponse } from '../models/GetFiltersResponse';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { UpdateFilterRequest } from '../models/UpdateFilterRequest';
import type { UpdateFilterResponse } from '../models/UpdateFilterResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FiltersService {

    /**
     * Delete a Filter
     * @param user Users unique ID
     * @param filter Filters unique ID
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static deleteFilter(
        user: string,
        filter: string,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{user}/filters/{filter}',
            path: {
                'user': user,
                'filter': filter,
            },
        });
    }

    /**
     * Request Filter information
     * @param user Users unique ID
     * @param filter Filters unique ID
     * @returns GetFilterResponse Success
     * @throws ApiError
     */
    public static getFilter(
        user: string,
        filter: string,
    ): CancelablePromise<GetFilterResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user}/filters/{filter}',
            path: {
                'user': user,
                'filter': filter,
            },
        });
    }

    /**
     * Update Filter information
     * This method updates Filter data. To unset a value, use empty strings
     * @param user Users unique ID
     * @param filter Filters unique ID
     * @param requestBody
     * @returns UpdateFilterResponse Success
     * @throws ApiError
     */
    public static updateFilter(
        user: string,
        filter: string,
        requestBody: UpdateFilterRequest,
    ): CancelablePromise<UpdateFilterResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{user}/filters/{filter}',
            path: {
                'user': user,
                'filter': filter,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List all Filters
     * @param forward Partial match of a forward email address or URL
     * @param limit How many records to return
     * @param page Current page number. Informational only, page numbers start from 1
     * @param next Cursor value for next page, retrieved from nextCursor response value
     * @param previous Cursor value for previous page, retrieved from previousCursor response value
     * @returns GetAllFiltersResponse Success
     * @throws ApiError
     */
    public static getAllFilters(
        forward?: string,
        limit?: number,
        page?: number,
        next?: number,
        previous?: number,
    ): CancelablePromise<GetAllFiltersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/filters',
            query: {
                'forward': forward,
                'limit': limit,
                'page': page,
                'next': next,
                'previous': previous,
            },
        });
    }

    /**
     * List Filters for a User
     * @param user Users unique ID
     * @returns GetFiltersResponse Success
     * @throws ApiError
     */
    public static getFilters(
        user: string,
    ): CancelablePromise<GetFiltersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user}/filters',
            path: {
                'user': user,
            },
        });
    }

    /**
     * Create new Filter
     * @param user Users unique ID
     * @param requestBody
     * @returns UpdateFilterResponse Success
     * @throws ApiError
     */
    public static createFilter(
        user: string,
        requestBody: CreateFilterRequest,
    ): CancelablePromise<UpdateFilterResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{user}/filters',
            path: {
                'user': user,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}