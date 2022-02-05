/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CheckTotp2FARequest } from '../models/CheckTotp2FARequest';
import type { EnableCustom2FARequest } from '../models/EnableCustom2FARequest';
import type { EnableTotp2FARequest } from '../models/EnableTotp2FARequest';
import type { SetupTotp2FARequest } from '../models/SetupTotp2FARequest';
import type { SetupTotp2FAResponse } from '../models/SetupTotp2FAResponse';
import type { SuccessResponse } from '../models/SuccessResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TwoFactorAuthService {

    /**
     * Validate TOTP Token
     * This method checks if a TOTP token provided by a User is valid for authentication
     * @param user ID of the User
     * @param requestBody
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static checkTotp2Fa(
        user: string,
        requestBody: CheckTotp2FARequest,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{user}/2fa/totp/check',
            path: {
                'user': user,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Disable 2FA
     * This method disables all 2FA mechanisms a user might have set up
     * @param user ID of the User
     * @param sess Session identifier for the logs
     * @param ip IP address for the logs
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static disable2Fa(
        user: string,
        sess?: string,
        ip?: string,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{user}/2fa',
            path: {
                'user': user,
            },
            query: {
                'sess': sess,
                'ip': ip,
            },
        });
    }

    /**
     * Disable custom 2FA for a user
     * This method disables custom 2FA. If it was the only 2FA set up, then account password for IMAP/POP3/SMTP gets enabled again
     * @param user ID of the User
     * @param sess Session identifier for the logs
     * @param ip IP address for the logs
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static disableCustom2Fa(
        user: string,
        sess?: string,
        ip?: string,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{user}/2fa/custom',
            path: {
                'user': user,
            },
            query: {
                'sess': sess,
                'ip': ip,
            },
        });
    }

    /**
     * Enable custom 2FA for a user
     * This method disables account password for IMAP/POP3/SMTP
     * @param user ID of the User
     * @param requestBody
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static enableCustom2Fa(
        user: string,
        requestBody?: EnableCustom2FARequest,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{user}/2fa/custom',
            path: {
                'user': user,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Disable TOTP auth
     * This method disables TOTP for a user. Does not affect other 2FA mechanisms a user might have set up
     * @param user ID of the User
     * @param sess Session identifier for the logs
     * @param ip IP address for the logs
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static disableTotp2Fa(
        user: string,
        sess?: string,
        ip?: string,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{user}/2fa/totp',
            path: {
                'user': user,
            },
            query: {
                'sess': sess,
                'ip': ip,
            },
        });
    }

    /**
     * Enable TOTP seed
     * This method enables TOTP for a user by verifying the seed value generated from 2fa/totp/setup
     * @param user ID of the User
     * @param requestBody
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static enableTotp2Fa(
        user: string,
        requestBody: EnableTotp2FARequest,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{user}/2fa/totp/enable',
            path: {
                'user': user,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Generate TOTP seed
     * This method generates TOTP seed and QR code for 2FA. User needs to verify the seed value using 2fa/totp/enable endpoint
     * @param user ID of the User
     * @param requestBody This method generates TOTP seed and QR code for 2FA. User needs to verify the seed value using 2fa/totp/enable endpoint
     * @returns SetupTotp2FAResponse Success
     * @throws ApiError
     */
    public static setupTotp2Fa(
        user: string,
        requestBody: SetupTotp2FARequest,
    ): CancelablePromise<SetupTotp2FAResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{user}/2fa/totp/setup',
            path: {
                'user': user,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}