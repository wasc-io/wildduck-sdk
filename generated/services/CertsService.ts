/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetTLSCertResult } from '../models/GetTLSCertResult';
import type { GetTLSCertsResponse } from '../models/GetTLSCertsResponse';
import type { ResolveIdResponse } from '../models/ResolveIdResponse';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { UpdateTLSCertRequest } from '../models/UpdateTLSCertRequest';
import type { UpdateTLSCertResponse } from '../models/UpdateTLSCertResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CertsService {

    /**
     * Delete a TLS certificate
     * @param cert ID of the TLS certificate
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static deleteTlsCert(
        cert: string,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/certs/{cert}',
            path: {
                'cert': cert,
            },
        });
    }

    /**
     * Request TLS certificate information
     * @param cert ID of the TLS certificate
     * @returns GetTLSCertResult Success
     * @throws ApiError
     */
    public static getTlsCerticate(
        cert: string,
    ): CancelablePromise<GetTLSCertResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/certs/{cert}',
            path: {
                'cert': cert,
            },
        });
    }

    /**
     * List registered TLS certificates
     * @param query Partial match of a server name
     * @param altNames Match `query` value against SAN as well (including wildcard names)
     * @param limit How many records to return
     * @param page Current page number. Informational only, page numbers start from 1
     * @param next Cursor value for next page, retrieved from nextCursor response value
     * @param previous Cursor value for previous page, retrieved from previousCursor response value
     * @returns GetTLSCertsResponse Success
     * @throws ApiError
     */
    public static getTlsCerticates(
        query?: string,
        altNames: boolean = false,
        limit?: number,
        page?: number,
        next?: string,
        previous?: string,
    ): CancelablePromise<GetTLSCertsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/certs',
            query: {
                'query': query,
                'altNames': altNames,
                'limit': limit,
                'page': page,
                'next': next,
                'previous': previous,
            },
        });
    }

    /**
     * Create or update TLS certificate for server name
     * Add a new TLS certificate for a server name or update existing one. You can add a single certificate for each server name but SAN names are supported as well. For example you can add a sertificate for "mydomain.com" that includes "\*.mydomain.com" in SAN and the same certificate would be used for requests that do not have it's own server name registered but match the SAN value.
     * > NB! you must ensure yourself that the `servername` value is actually listed in certificate's common name or SAN as WildDuck is going to use this certificate regardless.
     *
     * @param requestBody Add a new TLS certificate for a server name or update existing one
     * @returns UpdateTLSCertResponse Success
     * @throws ApiError
     */
    public static updateTlsCertificate(
        requestBody: UpdateTLSCertRequest,
    ): CancelablePromise<UpdateTLSCertResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/certs',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Resolve ID for a server name
     * @param servername Server name
     * @returns ResolveIdResponse Success
     * @throws ApiError
     */
    public static resolveTlsCertificate(
        servername: string,
    ): CancelablePromise<ResolveIdResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/certs/resolve/{servername}',
            path: {
                'servername': servername,
            },
        });
    }

}