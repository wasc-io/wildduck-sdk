/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateMessageRequest = {
    /**
     * Message ID values. Either comma separated numbers (1,2,3) or colon separated range (3:15)
     */
    message: string;
    /**
     * ID of the target Mailbox if you want to move messages
     */
    moveTo: string;
    /**
     * State of the \Seen flag
     */
    seen: boolean;
    /**
     * State of the \Flagged flag
     */
    flagged: boolean;
    /**
     * State of the \Draft flag
     */
    draft: boolean;
    /**
     * Either expiration date or false to turn of autoexpiration
     */
    expires: string;
    /**
     * Optional metadata, must be an object or JSON formatted string
     */
    metaData?: string;
};
