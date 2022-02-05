/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetAddressesResult = {
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
     * User ID this address belongs to if this is a User address
     */
    user: string;
    /**
     * If true then it is a forwarded address
     */
    forwarded: boolean;
    /**
     * If true then the forwarded address is disabled
     */
    forwardedDisabled: boolean;
    /**
     * List of forwarding targets
     */
    target?: Array<string>;
};
