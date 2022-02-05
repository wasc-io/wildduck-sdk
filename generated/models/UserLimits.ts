/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Forwards } from './Forwards';
import type { ImapDownload } from './ImapDownload';
import type { ImapMaxConnections } from './ImapMaxConnections';
import type { ImapUpload } from './ImapUpload';
import type { Pop3Download } from './Pop3Download';
import type { Quota } from './Quota';
import type { Received } from './Received';
import type { Recipients } from './Recipients';

/**
 * Account limits and usage
 */
export type UserLimits = {
    quota: Quota;
    recipients: Recipients;
    forwards: Forwards;
    received: Received;
    imapUpload: ImapUpload;
    imapDownload: ImapDownload;
    pop3Download: Pop3Download;
    imapMaxConnections?: ImapMaxConnections;
};
