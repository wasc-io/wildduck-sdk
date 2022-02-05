/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Autoreply } from './Autoreply';

export type CreateForwardedAddressRequest = {
    /**
     * E-mail Address
     */
    address: string;
    /**
     * Identity name
     */
    name?: string;
    /**
     * An array of forwarding targets. The value could either be an email address or a relay url to next MX server ("smtp://mx2.zone.eu:25") or an URL where mail contents are POSTed to
     */
    targets?: Array<string>;
    /**
     * Daily allowed forwarding count for this address
     */
    forwards?: number;
    /**
     * If true then address value can be in the form of `*@example.com`, otherwise using * is not allowed
     */
    allowWildcard?: boolean;
    /**
     * A list of tags associated with this address
     */
    tags?: Array<string>;
    /**
     * Optional metadata, must be an object or JSON formatted string
     */
    metaData?: string;
    /**
     * Optional metadata for internal use, must be an object or JSON formatted string of an object. Not available for user-role tokens
     */
    internalData?: string;
    autoreply?: Autoreply;
};
