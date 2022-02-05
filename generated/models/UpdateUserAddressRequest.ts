/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateUserAddressRequest = {
    /**
     * Identity name
     */
    name?: string;
    /**
     * New address if you want to rename existing address. Only affects normal addresses, special addresses that include * can not be changed
     */
    address?: string;
    /**
     * Indicates if this is the default address for the User
     */
    main: boolean;
    /**
     * Optional metadata, must be an object or JSON formatted string
     */
    metaData?: string;
    /**
     * Optional metadata for internal use, must be an object or JSON formatted string of an object. Not available for user-role tokens
     */
    internalData?: string;
    /**
     * A list of tags associated with this address
     */
    tags?: Array<string>;
};
