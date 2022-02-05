/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubmitMessageRequest } from '../models/SubmitMessageRequest';
import type { SubmitMessageResponse } from '../models/SubmitMessageResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubmissionService {

    /**
     * Submit a Message for Delivery
     * Use this method to send emails from a user account
     * @param user Users unique ID
     * @param requestBody
     * @returns SubmitMessageResponse Success
     * @throws ApiError
     */
    public static submitMessage(
        user: string,
        requestBody: SubmitMessageRequest,
    ): CancelablePromise<SubmitMessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{user}/submit',
            path: {
                'user': user,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}