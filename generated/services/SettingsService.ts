/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSettingRequest } from '../models/CreateSettingRequest';
import type { CreateSettingResponse } from '../models/CreateSettingResponse';
import type { GetSettingResponse } from '../models/GetSettingResponse';
import type { GetSettingsResponse } from '../models/GetSettingsResponse';
import type { SuccessResponse } from '../models/SuccessResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SettingsService {

    /**
     * Get Setting value
     * @param setting Key of the Setting
     * @param sess Session identifier for the logs
     * @param ip IP address for the logs
     * @returns GetSettingResponse Success
     * @throws ApiError
     */
    public static getSetting(
        setting: string,
        sess?: string,
        ip?: string,
    ): CancelablePromise<GetSettingResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/settings/{setting}',
            path: {
                'setting': setting,
            },
            query: {
                'sess': sess,
                'ip': ip,
            },
        });
    }

    /**
     * Create or Update Setting
     * Create a new or update an existing setting
     * @param setting Key of the Setting
     * @param requestBody Create or Update Setting
     * @returns CreateSettingResponse Success
     * @throws ApiError
     */
    public static createSetting(
        setting: string,
        requestBody: CreateSettingRequest,
    ): CancelablePromise<CreateSettingResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/settings/{setting}',
            path: {
                'setting': setting,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a setting
     * @param setting Key of the Setting
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static deleteSetting(
        setting: string,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/settings/{setting}',
            path: {
                'setting': setting,
            },
        });
    }

    /**
     * List registered Settings
     * @param filter Optional partial match of the Setting key
     * @param sess Session identifier for the logs
     * @param ip IP address for the logs
     * @returns GetSettingsResponse Success
     * @throws ApiError
     */
    public static getSettings(
        filter?: string,
        sess?: string,
        ip?: string,
    ): CancelablePromise<GetSettingsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/settings',
            query: {
                'filter': filter,
                'sess': sess,
                'ip': ip,
            },
        });
    }

}