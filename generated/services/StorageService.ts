/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetFilesResponse } from '../models/GetFilesResponse';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { UploadFileResponse } from '../models/UploadFileResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StorageService {

    /**
     * Delete a File
     * @param user ID of the User
     * @param file ID of the File
     * @returns SuccessResponse Success
     * @throws ApiError
     */
    public static deleteFile(
        user: string,
        file: string,
    ): CancelablePromise<SuccessResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{user}/storage/{file}',
            path: {
                'user': user,
                'file': file,
            },
        });
    }

    /**
     * Download File
     * This method returns stored file contents in binary form
     * @param user ID of the User
     * @param file ID of the File
     * @returns binary Success
     * @throws ApiError
     */
    public static getFile(
        user: string,
        file: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user}/storage/{file}',
            path: {
                'user': user,
                'file': file,
            },
        });
    }

    /**
     * List stored files
     * @param user ID of the User
     * @param query Partial match of a filename
     * @param limit How many records to return
     * @param page Current page number. Informational only, page numbers start from 1
     * @param next Cursor value for next page, retrieved from nextCursor response value
     * @param previous Cursor value for previous page, retrieved from previousCursor response value
     * @returns GetFilesResponse Success
     * @throws ApiError
     */
    public static getFiles(
        user: string,
        query?: string,
        limit?: number,
        page?: number,
        next?: number,
        previous?: number,
    ): CancelablePromise<GetFilesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user}/storage',
            path: {
                'user': user,
            },
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
     * Upload File
     * This method allows to upload an attachment to be linked from a draft
     * @param user ID of the User
     * @param formData
     * @returns UploadFileResponse Success
     * @throws ApiError
     */
    public static uploadFile(
        user: string,
        formData?: {
            /**
             * Name of the file
             */
            filename?: string;
            /**
             * MIME type of the file. Is detected from the file name by default
             */
            contentType?: string;
            /**
             * Encoding of the file content. Useful if you want to upload the file in base64 encoded format. Valid options "base64", "hex", "utf8"
             */
            encoding?: string;
            content: Blob;
        },
    ): CancelablePromise<UploadFileResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{user}/storage',
            path: {
                'user': user,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}