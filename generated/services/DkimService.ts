/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetDkimKeyResponse } from '../models/GetDkimKeyResponse';
import type { GetDkimKeysResponse } from '../models/GetDkimKeysResponse';
import type { ResolveIdResponse } from '../models/ResolveIdResponse';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { UpdateDkimKeyRequest } from '../models/UpdateDkimKeyRequest';
import type { UpdateDkimKeyResponse } from '../models/UpdateDkimKeyResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DkimService {

    /**
     * Delete a DKIM key
     * @param dkim ID of the DKIM
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static deleteDkimKey(
        dkim: string,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/dkim/{dkim}',
            path: {
                'dkim': dkim,
            },
        });
    }

    /**
     * Request DKIM information
     * @param dkim ID of the DKIM
     * @returns GetDkimKeyResponse Success
     * @throws ApiError
     */
    public static getDkimKey(
        dkim: string,
    ): CancelablePromise<GetDkimKeyResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dkim/{dkim}',
            path: {
                'dkim': dkim,
            },
        });
    }

    /**
     * List registered DKIM keys
     * @param query Partial match of a Domain name
     * @param limit How many records to return
     * @param page Current page number. Informational only, page numbers start from 1
     * @param next Cursor value for next page, retrieved from nextCursor response value
     * @param previous Cursor value for previous page, retrieved from previousCursor response value
     * @returns GetDkimKeysResponse Success
     * @throws ApiError
     */
    public static getDkimKeys(
        query?: string,
        limit?: number,
        page?: number,
        next?: number,
        previous?: number,
    ): CancelablePromise<GetDkimKeysResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dkim',
            query: {
                'query': query,
                'limit': limit,
                'page': page,
                'next': next,
                'previous': previous,
            },
        });
    }

    /**
     * Create or update DKIM key for domain
     * Add a new DKIM key for a Domain or update existing one. There can be single DKIM key registered for each domain name.
     * @param requestBody Add a new DKIM key for a Domain or update existing one. There can be single DKIM key registered for each domain name.
     * @returns UpdateDkimKeyResponse Success
     * @throws ApiError
     */
    public static updateDkimKey(
        requestBody: UpdateDkimKeyRequest,
    ): CancelablePromise<UpdateDkimKeyResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dkim',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Resolve ID for a DKIM domain
     * @param domain DKIM domain
     * @returns ResolveIdResponse Success
     * @throws ApiError
     */
    public static resolveDkim(
        domain: string,
    ): CancelablePromise<ResolveIdResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dkim/resolve/{domain}',
            path: {
                'domain': domain,
            },
        });
    }

}