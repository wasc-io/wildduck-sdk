/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetUserAddressesResult = {
    /**
     * ID of the Address
     */
    id: string;
    /**
     * Identity name
     */
    name: string;
    /**
     * E-mail address string
     */
    address: string;
    /**
     * Indicates if this is the default address for the User
     */
    main: boolean;
    /**
     * Datestring of the time the address was created
     */
    created: string;
    /**
     * List of tags associated with the Address
     */
    tags: Array<string>;
    /**
     * Metadata object (if available)
     */
    metaData?: any;
    /**
     * Internal metadata object (if available), not included for user-role requests
     */
    internalData?: any;
};
