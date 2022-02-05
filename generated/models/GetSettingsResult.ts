/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetSettingsResult = {
    /**
     * Setting key
     */
    key: string;
    /**
     * Setting value
     */
    value?: (string | number);
    /**
     * Setting name
     */
    name?: string;
    /**
     * Setting description
     */
    description?: string;
    /**
     * Default value for this key
     */
    default?: (string | number);
    /**
     * Value subtype
     */
    type?: string;
    /**
     * If true then the value is set
     */
    custom?: boolean;
};
