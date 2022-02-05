/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Autoreply } from './Autoreply';

export type UpdateForwardedAddressRequest = {
    /**
     * New address. Only affects normal addresses, special addresses that include * can not be changed
     */
    address?: string;
    /**
     * Identity name
     */
    name?: string;
    /**
     * An array of forwarding targets. The value could either be an email address or a relay url to next MX server ("smtp://mx2.zone.eu:25") or an URL where mail contents are POSTed to. If set then overwrites previous targets array
     */
    targets?: Array<string>;
    /**
     * Daily allowed forwarding count for this address
     */
    forwards?: number;
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
    /**
     * If true then disables forwarded address (stops forwarding messages)
     */
    forwardedDisabled?: boolean;
    autoreply?: Autoreply;
};
