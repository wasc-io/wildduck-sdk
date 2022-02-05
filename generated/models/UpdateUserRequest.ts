/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateUserRequest = {
    /**
     * Name of the User
     */
    name?: string;
    /**
     * If provided then validates against account password before applying any changes
     */
    existingPassword?: string;
    /**
     * New password for the account. Set to boolean false to disable password usage for the master scope, Application Specific Passwords would still be allowed
     */
    password?: string;
    /**
     * If true then password is already hashed, so store as is. Supported hashes: pbkdf2, bcrypt ($2a, $2y, $2b), md5 ($1), sha512 ($6), sha256 ($5), argon2 ($argon2d, $argon2i, $argon2id). Stored hashes are rehashed to pbkdf2 on first successful password check.
     */
    hashedPassword?: boolean;
    /**
     * If false then validates provided passwords against Have I Been Pwned API. Experimental, so validation is disabled by default but will be enabled automatically in some future version of WildDuck.
     */
    allowUnsafe?: boolean;
    /**
     * A list of tags associated with this user
     */
    tags?: Array<string>;
    /**
     * Default retention time (in ms). Set to 0 to disable
     */
    retention?: number;
    /**
     * If true then all messages sent through MSA are also uploaded to the Sent Mail folder. Might cause duplicates with some email clients, so disabled by default.
     */
    uploadSentMessages?: boolean;
    /**
     * If true then received messages are encrypted
     */
    encryptMessages?: boolean;
    /**
     * If true then forwarded messages are encrypted
     */
    encryptForwarded?: boolean;
    /**
     * Public PGP key for the User that is used for encryption. Use empty string to remove the key
     */
    pubKey?: string;
    /**
     * Optional metadata, must be an object or JSON formatted string
     */
    metaData?: string;
    /**
     * Optional internal metadata, must be an object or JSON formatted string of an object. Not available for user-role tokens
     */
    internalData?: any;
    /**
     * Language code for the User
     */
    language?: string;
    /**
     * An array of forwarding targets. The value could either be an email address or a relay url to next MX server ("smtp://mx2.zone.eu:25") or an URL where mail contents are POSTed to
     */
    targets?: Array<string>;
    /**
     * Relative scale for detecting spam. 0 means that everything is spam, 100 means that nothing is spam
     */
    spamLevel?: number;
    /**
     * Allowed quota of the user in bytes
     */
    quota?: number;
    /**
     * How many messages per 24 hour can be sent
     */
    recipients?: number;
    /**
     * How many messages per 24 hour can be forwarded
     */
    forwards?: number;
    /**
     * How many bytes can be uploaded via IMAP during 24 hour
     */
    imapMaxUpload?: number;
    /**
     * How many bytes can be downloaded via IMAP during 24 hour
     */
    imapMaxDownload?: number;
    /**
     * How many bytes can be downloaded via POP3 during 24 hour
     */
    pop3MaxDownload?: number;
    /**
     * How many latest messages to list in POP3 session
     */
    pop3MaxMessages?: number;
    /**
     * How many parallel IMAP connections are alowed
     */
    imapMaxConnections?: number;
    /**
     * How many messages can be received from MX during 60 seconds
     */
    receivedMax?: number;
    /**
     * If true, then disables 2FA for this user
     */
    disable2fa?: boolean;
    /**
     * List of scopes that are disabled for this user ("imap", "pop3", "smtp")
     */
    disabledScopes: Array<string>;
    /**
     * If true then disables user account (can not login, can not receive messages)
     */
    disabled?: boolean;
    /**
     * A list of additional email addresses this user can send mail from. Wildcard is allowed.
     */
    fromWhitelist?: Array<string>;
    /**
     * If true then disables authentication
     */
    suspended?: boolean;
    /**
     * Session identifier for the logs
     */
    sess?: string;
    /**
     * IP address for the logs
     */
    ip?: string;
};
