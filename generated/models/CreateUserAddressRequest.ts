/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateUserAddressRequest = {
    /**
     * E-mail Address
     */
    address: string;
    /**
     * Identity name
     */
    name?: string;
    /**
     * A list of tags associated with this address
     */
    tags?: Array<string>;
    /**
     * Indicates if this is the default address for the User
     */
    main?: boolean;
    /**
     * If true then address value can be in the form of `*@example.com`, `*suffix@example.com` and `username@*`, otherwise using * is not allowed. Static suffix can be up to 32 characters long.
     */
    allowWildcard?: boolean;
    /**
     * Optional metadata, must be an object or JSON formatted string
     */
    metaData?: string;
    /**
     * Optional metadata for internal use, must be an object or JSON formatted string of an object. Not available for user-role tokens
     */
    internalData?: string;
};
