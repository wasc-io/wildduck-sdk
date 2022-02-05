/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * If set then this message is from a mailing list
 */
export type List = {
    /**
     * Value from List-ID header
     */
    id: string;
    /**
     * Value from List-Unsubscribe header
     */
    unsubscribe: string;
};
