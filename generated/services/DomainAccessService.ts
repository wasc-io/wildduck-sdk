/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAllowedDomainRequest } from '../models/CreateAllowedDomainRequest';
import type { CreateAllowedDomainResponse } from '../models/CreateAllowedDomainResponse';
import type { CreateBlockedDomainRequest } from '../models/CreateBlockedDomainRequest';
import type { CreateBlockedDomainResponse } from '../models/CreateBlockedDomainResponse';
import type { GetAllowedDomainResponse } from '../models/GetAllowedDomainResponse';
import type { GetBlockedDomainResponse } from '../models/GetBlockedDomainResponse';
import type { SuccessResponse } from '../models/SuccessResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DomainAccessService {

    /**
     * Delete a Domain from listing
     * @param domain Listed domains unique ID
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static deleteDomainListing(
        domain: string,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/domainaccess/{domain}',
            path: {
                'domain': domain,
            },
        });
    }

    /**
     * List allowlisted domains
     * @param tag Tag to look for
     * @returns GetAllowedDomainResponse Success
     * @throws ApiError
     */
    public static getAllowedDomain(
        tag: string,
    ): CancelablePromise<GetAllowedDomainResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/domainaccess/{tag}/allow',
            path: {
                'tag': tag,
            },
        });
    }

    /**
     * Add domain to allowlist
     * If an email is sent from a domain that is listed in the allowlist then it is never marked as spam. Lists apply for tagged users.
     * @param tag Tag to look for
     * @param requestBody
     * @returns CreateAllowedDomainResponse Success
     * @throws ApiError
     */
    public static createAllowedDomain(
        tag: string,
        requestBody: CreateAllowedDomainRequest,
    ): CancelablePromise<CreateAllowedDomainResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/domainaccess/{tag}/allow',
            path: {
                'tag': tag,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List blocklisted domains
     * @param tag Tag to look for
     * @returns GetBlockedDomainResponse Success
     * @throws ApiError
     */
    public static getBlockedDomain(
        tag: string,
    ): CancelablePromise<GetBlockedDomainResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/domainaccess/{tag}/block',
            path: {
                'tag': tag,
            },
        });
    }

    /**
     * Add domain to blocklist
     * If an email is sent from a domain that is listed in the blocklist then it is always marked as spam. Lists apply for tagged users.
     * @param tag Tag to look for
     * @param requestBody
     * @returns CreateBlockedDomainResponse Success
     * @throws ApiError
     */
    public static createBlockedDomain(
        tag: string,
        requestBody: CreateBlockedDomainRequest,
    ): CancelablePromise<CreateBlockedDomainResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/domainaccess/{tag}/block',
            path: {
                'tag': tag,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}