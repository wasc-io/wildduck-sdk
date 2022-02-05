/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateSettingRequest = {
    /**
     * Setting value
     */
    value: (string | number);
    /**
     * Session identifier for the logs
     */
    sess?: any;
    /**
     * IP address for the logs
     */
    ip?: any;
};
