/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetSettingResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * Key of the Setting
     */
    key?: string;
    /**
     * Setting value
     */
    value?: (string | number);
};
