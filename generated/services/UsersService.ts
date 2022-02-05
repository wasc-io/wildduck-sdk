/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserRequest } from '../models/CreateUserRequest';
import type { CreateUserResponse } from '../models/CreateUserResponse';
import type { GetUserResponse } from '../models/GetUserResponse';
import type { GetUsersResponse } from '../models/GetUsersResponse';
import type { LogoutUserRequest } from '../models/LogoutUserRequest';
import type { RecalculateQuotaResponse } from '../models/RecalculateQuotaResponse';
import type { RecoverInfoResponse } from '../models/RecoverInfoResponse';
import type { ResetUserPasswordRequest } from '../models/ResetUserPasswordRequest';
import type { ResetUserPasswordResponse } from '../models/ResetUserPasswordResponse';
import type { ResolveIdResponse } from '../models/ResolveIdResponse';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { UpdateUserRequest } from '../models/UpdateUserRequest';
import type { UserRestoreRequest } from '../models/UserRestoreRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * Delete a User
     * This method deletes user and address entries from DB and schedules a background task to delete messages. You can call this method several times even if the user has already been deleted, in case there are still some pending messages.
     * @param id Users unique ID.
     * @param deleteAfter Delete user entry from registry but keep all user data until provided date. User account is fully recoverable up to that date.
     * @param sess Session identifier for the logs
     * @param ip IP address for the logs
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static deleteUser(
        id: string,
        deleteAfter?: string,
        sess?: string,
        ip?: string,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            query: {
                'deleteAfter': deleteAfter,
                'sess': sess,
                'ip': ip,
            },
        });
    }

    /**
     * Request User information
     * @param id Users unique ID.
     * @returns GetUserResponse Success
     * @throws ApiError
     */
    public static getUser(
        id: string,
    ): CancelablePromise<GetUserResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update User information
     * @param id Users unique ID.
     * @param requestBody
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static updateUser(
        id: string,
        requestBody: UpdateUserRequest,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Open change stream
     * This api call returns an EventSource response. Listen on this stream to get notifications about changes in messages and mailboxes. Returned events are JSON encoded strings
     * @param id Users unique ID.
     * @returns string Success
     * @throws ApiError
     */
    public static getUpdates(
        id: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}/updates',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Resolve ID for a username
     * @param username Username of the User. Alphanumeric value. Must start with a letter, dots are allowed but informational only ("user.name" is the same as "username")
     * @returns ResolveIdResponse Success
     * @throws ApiError
     */
    public static resolveUser(
        username: string,
    ): CancelablePromise<ResolveIdResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/resolve/{username}',
            path: {
                'username': username,
            },
        });
    }

    /**
     * Return recovery info for a deleted user
     * @param id Users unique ID.
     * @param sess Session identifier for the logs
     * @param ip IP address for the logs
     * @returns RecoverInfoResponse Success
     * @throws ApiError
     */
    public static restoreUserInfo(
        id: string,
        sess?: string,
        ip?: string,
    ): CancelablePromise<RecoverInfoResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}/restore',
            path: {
                'id': id,
            },
            query: {
                'sess': sess,
                'ip': ip,
            },
        });
    }

    /**
     * Cancel user deletion task
     * Use this endpoint to cancel a timed deletion task scheduled by `DELETE /user/{id}`. If user data is not yet deleted then the account is fully recovered, except any email addresses that might have been already recycled
     * @param id Users unique ID.
     * @param requestBody
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static restoreUser(
        id: string,
        requestBody: UserRestoreRequest,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{id}/restore',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List registered Users
     * @param query Partial match of username or default email address
     * @param forward Partial match of a forward email address or URL
     * @param tags Comma separated list of tags. The User must have at least one to be set
     * @param requiredTags Comma separated list of tags. The User must have all listed tags to be set
     * @param metaData If true, then includes metaData in the response
     * @param internalData If true, then includes internalData in the response. Not shown for user-role tokens.
     * @param limit How many records to return
     * @param page Current page number. Informational only, page numbers start from 1
     * @param next Cursor value for next page, retrieved from nextCursor response value
     * @param previous Cursor value for previous page, retrieved from previousCursor response value
     * @returns GetUsersResponse Success
     * @throws ApiError
     */
    public static getUsers(
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
    ): CancelablePromise<GetUsersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
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
     * Create new user
     * @param requestBody
     * @returns CreateUserResponse Success
     * @throws ApiError
     */
    public static createUser(
        requestBody: CreateUserRequest,
    ): CancelablePromise<CreateUserResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Recalculate User quota
     * This method recalculates quota usage for a User. Normally not needed, only use it if quota numbers are way off. This method is not transactional, so if the user is currently receiving new messages then the resulting value is not exact.
     * @param user Users unique ID.
     * @returns RecalculateQuotaResponse Success
     * @throws ApiError
     */
    public static recalculateQuota(
        user: string,
    ): CancelablePromise<RecalculateQuotaResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{user}/quota/reset',
            path: {
                'user': user,
            },
        });
    }

    /**
     * Recalculate Quota for all Users
     * This method recalculates quota usage for all Users. Normally not needed, only use it if quota numbers are way off. This method is not transactional, so if the user is currently receiving new messages then the resulting value is not exact.
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static recalculateQuotaAllUsers(): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/quota/reset',
        });
    }

    /**
     * Log out User
     * This method logs out all user sessions in IMAP
     * @param id Users unique ID.
     * @param requestBody
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static logoutUser(
        id: string,
        requestBody: LogoutUserRequest,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{id}/logout',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Reset password for a User
     * This method generates a new temporary password for a User. Additionally it removes all two-factor authentication settings
     * @param id Users unique ID.
     * @param requestBody
     * @returns ResetUserPasswordResponse Success
     * @throws ApiError
     */
    public static resetUserPassword(
        id: string,
        requestBody?: ResetUserPasswordRequest,
    ): CancelablePromise<ResetUserPasswordResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{id}/password/reset',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}