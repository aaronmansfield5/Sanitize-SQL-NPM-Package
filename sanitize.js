/**
 * The SQL class provides methods for sanitizing SQL queries to help prevent SQL injection attacks.
 * It's important to note that this class is not a comprehensive solution for securing your database
 * and should be used in conjunction with other security measures, such as prepared statements.
 */
class SQL {
    constructor() {
        this.restrictedKeywords = [
            "SELECT",
            "INSERT",
            "UPDATE",
            "DELETE",
            "DROP",
            "ALTER",
            "CREATE",
            "TRUNCATE",
            "EXEC",
            "UNION",
            "GRANT",
            "REVOKE",
        ];

        this.restrictedKeywordsPattern = this._buildRestrictedKeywordsPattern();
    }

    /**
     * Sanitize the values within an SQL query to prevent SQL injection.
     *
     * @param {string} query - The SQL query to sanitize.
     * @returns {string} - The sanitized SQL query.
     */
    sanitize(query) {
        if (typeof query !== "string") throw new Error("Query must be a string.");

        // Escape single quotes (') within the query
        const escapedQuery = this._escapeSingleQuotes(query);

        // Remove potentially dangerous keywords from the query
        const sanitizedQuery = this._removeRestrictedKeywords(escapedQuery);

        return sanitizedQuery;
    }

    /**
     * Escape single quotes within the query by replacing them with two single quotes.
     *
     * @param {string} query - The SQL query to escape.
     * @returns {string} - The query with escaped single quotes.
     * @private
     */
    _escapeSingleQuotes(query) {
        const singleQuotePattern = /'/g;
        return query.replace(singleQuotePattern, "''");
    }

    /**
     * Remove potentially dangerous SQL keywords from the query.
     *
     * @param {string} query - The SQL query to sanitize.
     * @returns {string} - The sanitized SQL query with restricted keywords removed.
     * @private
     */
    _removeRestrictedKeywords(query) {
        return query.replace(this.restrictedKeywordsPattern, "");
    }

    /**
     * Add a restricted keyword to the list of keywords that should be removed from queries.
     *
     * @param {string} keyword - The restricted keyword to add.
     * @returns {void}
     */
    addRestrictedKeyword(keyword) {
        if (typeof keyword !== "string") throw new Error("Keyword must be a string.");
        if (this.restrictedKeywords.includes(keyword.toUpperCase())) return;

        this.restrictedKeywords.push(keyword.toUpperCase());
        this._updateRestrictedKeywordsPattern();
    }

    /**
     * Remove a restricted keyword from the list of keywords that should be removed from queries.
     *
     * @param {string} keyword - The restricted keyword to remove.
     * @returns {void}
     */
    removeRestrictedKeyword(keyword) {
        if (typeof keyword !== "string") throw new Error("Keyword must be a string.");
        const index = this.restrictedKeywords.indexOf(keyword.toUpperCase());
        if (index === -1) return;

        this.restrictedKeywords.splice(index, 1);
        this._updateRestrictedKeywordsPattern();
    }

    /**
     * Update the restricted keywords pattern based on the current list of restricted keywords.
     *
     * @returns {void}
     * @private
     */
    _updateRestrictedKeywordsPattern() {
        this.restrictedKeywordsPattern = this._buildRestrictedKeywordsPattern();
    }

    /**
     * Build the RegExp pattern for the current list of restricted keywords.
     *
     * @returns {RegExp} - The restricted keywords pattern.
     * @private
     */
    _buildRestrictedKeywordsPattern() {
        return new RegExp(
            `\\b(?:${this.restrictedKeywords.join("|")})\\b`,
            "gi"
        );
    }

    /**
     * Check if the provided keyword is valid.
     *
     * @param {string} keyword - The keyword to validate.
     * @returns {boolean} - Returns true if the keyword is valid, false otherwise.
     */
    isValidKeyword(keyword) {
        if (typeof keyword !== "string") return false;

        const pattern = /^[A-Za-z_][A-Za-z0-9_$]*$/;
        return pattern.test(keyword);
    }
}

module.exports = {
    SQL
}