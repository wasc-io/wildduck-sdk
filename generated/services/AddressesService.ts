/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateForwardedAddressRequest } from '../models/CreateForwardedAddressRequest';
import type { CreateForwardedAddressResponse } from '../models/CreateForwardedAddressResponse';
import type { CreateUserAddressRequest } from '../models/CreateUserAddressRequest';
import type { CreateUserAddressResponse } from '../models/CreateUserAddressResponse';
import type { GetAddressesResponse } from '../models/GetAddressesResponse';
import type { GetForwardedAddressResponse } from '../models/GetForwardedAddressResponse';
import type { GetUserAddressesregisterResponse } from '../models/GetUserAddressesregisterResponse';
import type { GetUserAddressesResponse } from '../models/GetUserAddressesResponse';
import type { GetUserAddressResponse } from '../models/GetUserAddressResponse';
import type { RenameDomainRequest } from '../models/RenameDomainRequest';
import type { ResolveAddressResponse } from '../models/ResolveAddressResponse';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { UpdateForwardedAddressRequest } from '../models/UpdateForwardedAddressRequest';
import type { UpdateUserAddressRequest } from '../models/UpdateUserAddressRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AddressesService {

    /**
     * Delete a forwarded Address
     * @param address ID of the Address
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static deleteForwardedAddress(
        address: string,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/addresses/forwarded/{address}',
            path: {
                'address': address,
            },
        });
    }

    /**
     * Request forwarded Addresses information
     * @param address ID of the Address
     * @returns GetForwardedAddressResponse Success
     * @throws ApiError
     */
    public static getForwardedAddress(
        address: string,
    ): CancelablePromise<GetForwardedAddressResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/addresses/forwarded/{address}',
            path: {
                'address': address,
            },
        });
    }

    /**
     * Update forwarded Address information
     * @param address ID of the Address
     * @param requestBody
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static updateForwardedAddress(
        address: string,
        requestBody: UpdateForwardedAddressRequest,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/addresses/forwarded/{address}',
            path: {
                'address': address,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete an Address
     * @param user ID of the User
     * @param address ID of the Address
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static deleteUserAddress(
        user: string,
        address: string,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{user}/addresses/{address}',
            path: {
                'user': user,
                'address': address,
            },
        });
    }

    /**
     * Request Addresses information
     * @param user ID of the User
     * @param address ID of the Address
     * @returns GetUserAddressResponse Success
     * @throws ApiError
     */
    public static getUserAddress(
        user: string,
        address: string,
    ): CancelablePromise<GetUserAddressResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user}/addresses/{address}',
            path: {
                'user': user,
                'address': address,
            },
        });
    }

    /**
     * Update Address information
     * @param user ID of the User
     * @param address ID of the Address
     * @param requestBody
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static updateUserAddress(
        user: string,
        address: string,
        requestBody: UpdateUserAddressRequest,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{user}/addresses/{address}',
            path: {
                'user': user,
                'address': address,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Address info
     * @param address ID of the Address or e-mail address string
     * @param allowWildcard If true then resolves also wildcard addresses
     * @returns ResolveAddressResponse Success
     * @throws ApiError
     */
    public static resolveAddress(
        address: string,
        allowWildcard?: boolean,
    ): CancelablePromise<ResolveAddressResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/addresses/resolve/{address}',
            path: {
                'address': address,
            },
            query: {
                'allowWildcard': allowWildcard,
            },
        });
    }

    /**
     * List registered Addresses
     * @param query Partial match of an address
     * @param forward Partial match of a forward email address or URL
     * @param tags Comma separated list of tags. The Address must have at least one to be set
     * @param requiredTags Comma separated list of tags. The Address must have all listed tags to be set
     * @param metaData If true, then includes metaData in the response
     * @param internalData If true, then includes internalData in the response. Not shown for user-role tokens.
     * @param limit How many records to return
     * @param page Current page number. Informational only, page numbers start from 1
     * @param next Cursor value for next page, retrieved from nextCursor response value
     * @param previous Cursor value for previous page, retrieved from previousCursor response value
     * @returns GetAddressesResponse Success
     * @throws ApiError
     */
    public static getAddresses(
        query?: string,
        forward?: string,
        tags?: string,
        requiredTags?: string,
        metaData?: boolean,
        internalData?: boolean,
        limit?: number,
        page?: number,
        next?: number,
        previous?: number,
    ): CancelablePromise<GetAddressesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/addresses',
            query: {
                'query': query,
                'forward': forward,
                'tags': tags,
                'requiredTags': requiredTags,
                'metaData': metaData,
                'internalData': internalData,
                'limit': limit,
                'page': page,
                'next': next,
                'previous': previous,
            },
        });
    }

    /**
     * List registered Addresses for a User
     * @param user ID of the User
     * @param metaData If true, then includes metaData in the response
     * @param internalData If true, then includes internalData in the response. Not shown for user-role tokens.
     * @returns GetUserAddressesResponse Success
     * @throws ApiError
     */
    public static getUserAddresses(
        user: string,
        metaData?: boolean,
        internalData?: boolean,
    ): CancelablePromise<GetUserAddressesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user}/addresses',
            path: {
                'user': user,
            },
            query: {
                'metaData': metaData,
                'internalData': internalData,
            },
        });
    }

    /**
     * Create new Address
     * Add a new email address for a User. Addresses can contain unicode characters. Dots in usernames are normalized so no need to create both "firstlast@example.com" and "first.last@example.com" Special addresses `*@example.com`, `*suffix@example.com` and `username@*` catches all emails to these domains or users without a registered destination (requires allowWildcard argument)
     * @param user ID of the User
     * @param requestBody
     * @returns CreateUserAddressResponse Success
     * @throws ApiError
     */
    public static createUserAddress(
        user: string,
        requestBody: CreateUserAddressRequest,
    ): CancelablePromise<CreateUserAddressResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{user}/addresses',
            path: {
                'user': user,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List addresses from communication register
     * Lists addresses from email headers. Includes addresses both from sent and received messages. Sorted by last usage.
     * @param user ID of the User
     * @param query Prefix of an address or a name
     * @param limit How many records to return
     * @returns GetUserAddressesregisterResponse Success
     * @throws ApiError
     */
    public static getUserAddressregister(
        user: string,
        query: string,
        limit?: number,
    ): CancelablePromise<GetUserAddressesregisterResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user}/addressregister',
            path: {
                'user': user,
            },
            query: {
                'query': query,
                'limit': limit,
            },
        });
    }

    /**
     * Create new forwarded Address
     * Add a new forwarded email address. Addresses can contain unicode characters. Dots in usernames are normalized so no need to create both "firstlast@example.com" and "first.last@example.com" Special addresses `*@example.com` and `username@*` catches all emails to these domains or users without a registered destination (requires allowWildcard argument)
     * @param requestBody
     * @returns CreateForwardedAddressResponse Success
     * @throws ApiError
     */
    public static createForwardedAddress(
        requestBody: CreateForwardedAddressRequest,
    ): CancelablePromise<CreateForwardedAddressResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/addresses/forwarded',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Rename domain in addresses
     * Renames domain names for addresses, DKIM keys and Domain Aliases
     * @param requestBody
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static renameDomain(
        requestBody: RenameDomainRequest,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/addresses/renameDomain',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}