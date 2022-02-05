/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateAuditRequest } from '../models/CreateAuditRequest';
import type { CreateAuditResponse } from '../models/CreateAuditResponse';
import type { GetAuditResponse } from '../models/GetAuditResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuditService {

    /**
     * Request Audit Info
     * This method returns information about stored audit
     * @param audit ID of the Audit
     * @returns GetAuditResponse Success
     * @throws ApiError
     */
    public static getAudit(
        audit: string,
    ): CancelablePromise<GetAuditResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/audit/{audit}',
            path: {
                'audit': audit,
            },
        });
    }

    /**
     * Export Audited Emails
     * This method returns a mailbox file that contains all audited emails
     * @param audit ID of the Audit
     * @returns any Success
     * @throws ApiError
     */
    public static getAuditEmails(
        audit: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/audit/{audit}/export.mbox',
            path: {
                'audit': audit,
            },
        });
    }

    /**
     * Create new audit
     * Initiates a message audit
     * @param requestBody Initiates a message audit
     * @returns CreateAuditResponse Success
     * @throws ApiError
     */
    public static createAudit(
        requestBody: CreateAuditRequest,
    ): CancelablePromise<CreateAuditResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/audit',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}