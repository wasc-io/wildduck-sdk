/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetDomainAliasResponse = {
    /**
     * Indicates successful response
     */
    success: boolean;
    /**
     * ID of the Alias
     */
    id: string;
    /**
     * Alias domain
     */
    alias: string;
    /**
     * Alias target
     */
    domain: string;
    /**
     * Datestring of the time the alias was created
     */
    created: string;
};
