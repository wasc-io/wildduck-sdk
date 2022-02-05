/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateDomainAliasRequest } from '../models/CreateDomainAliasRequest';
import type { CreateDomainAliasResponse } from '../models/CreateDomainAliasResponse';
import type { GetDomainAliasesResponse } from '../models/GetDomainAliasesResponse';
import type { GetDomainAliasResponse } from '../models/GetDomainAliasResponse';
import type { ResolveIdResponse } from '../models/ResolveIdResponse';
import type { SuccessResponse } from '../models/SuccessResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DomainAliasesService {

    /**
     * Delete an Alias
     * @param alias ID of the Alias
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static deleteDomainAlias(
        alias: string,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/domainaliases/{alias}',
            path: {
                'alias': alias,
            },
        });
    }

    /**
     * Request Alias information
     * @param alias ID of the Alias
     * @returns GetDomainAliasResponse Success
     * @throws ApiError
     */
    public static getDomainAlias(
        alias: string,
    ): CancelablePromise<GetDomainAliasResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/domainaliases/{alias}',
            path: {
                'alias': alias,
            },
        });
    }

    /**
     * List registered Domain Aliases
     * @param query Partial match of a Domain Alias or Domain name
     * @param limit How many records to return
     * @param page Current page number. Informational only, page numbers start from 1
     * @param next Cursor value for next page, retrieved from nextCursor response value
     * @param previous Cursor value for previous page, retrieved from previousCursor response value
     * @returns GetDomainAliasesResponse Success
     * @throws ApiError
     */
    public static getDomainAliases(
        query?: string,
        limit?: number,
        page?: number,
        next?: number,
        previous?: number,
    ): CancelablePromise<GetDomainAliasesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/domainaliases',
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
     * Create new Domain Alias
     * Add a new Alias for a Domain. This allows to accept mail on username@domain and username@alias
     * @param requestBody
     * @returns CreateDomainAliasResponse Success
     * @throws ApiError
     */
    public static createDomainAlias(
        requestBody: CreateDomainAliasRequest,
    ): CancelablePromise<CreateDomainAliasResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/domainaliases',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Resolve ID for a domain aias
     * @param alias Alias domain
     * @returns ResolveIdResponse Success
     * @throws ApiError
     */
    public static resolveDomainAlias(
        alias: string,
    ): CancelablePromise<ResolveIdResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/domainaliases/resolve/{alias}',
            path: {
                'alias': alias,
            },
        });
    }

}