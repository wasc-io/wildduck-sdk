/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Action to take with a matching message
 */
export type Action = {
    /**
     * If true then mark matching messages as Seen
     */
    seen?: boolean;
    /**
     * If true then mark matching messages as Flagged
     */
    flag?: boolean;
    /**
     * If true then do not store matching messages
     */
    delete?: boolean;
    /**
     * If true then store matching messags to Junk Mail folder
     */
    spam?: boolean;
    /**
     * Mailbox ID to store matching messages to
     */
    mailbox?: string;
    /**
     * An array of forwarding targets. The value could either be an email address or a relay url to next MX server ("smtp://mx2.zone.eu:25") or an URL where mail contents are POSTed to
     */
    targets?: Array<string>;
};
