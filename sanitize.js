class SQL {
    constructor() {
        this.restrictedKeywords = new Set([
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
        ]);

        this.restrictedKeywordsPattern = this._buildRestrictedKeywordsPattern();
    }

    sanitize(query) {
        if (typeof query !== "string") throw new Error("Query must be a string.");
        return this._sanitizeQuery(query);
    }

    _sanitizeQuery(query) {
        // Replace single quotes and match restricted keywords at the same time
        return query.replace(/'|(\b(?:SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|TRUNCATE|EXEC|UNION|GRANT|REVOKE)\b)/gi, (match, keyword) => {
            if (match === "'") {
                return "''";
            } else if (this.restrictedKeywords.has(keyword.toUpperCase())) {
                return "";
            } else {
                return match;
            }
        });
    }

    addRestrictedKeyword(keyword) {
        if (typeof keyword !== "string") throw new Error("Keyword must be a string.");
        if (this.restrictedKeywords.has(keyword.toUpperCase())) return;

        this.restrictedKeywords.add(keyword.toUpperCase());
        this.restrictedKeywordsPattern = this._buildRestrictedKeywordsPattern();
    }

    removeRestrictedKeyword(keyword) {
        if (typeof keyword !== "string") throw new Error("Keyword must be a string.");
        if (!this.restrictedKeywords.has(keyword.toUpperCase())) return;

        this.restrictedKeywords.delete(keyword.toUpperCase());
        this.restrictedKeywordsPattern = this._buildRestrictedKeywordsPattern();
    }

    _buildRestrictedKeywordsPattern() {
        return new RegExp(
            `\\b(?:${Array.from(this.restrictedKeywords).join("|")})\\b`,
            "gi"
        );
    }

    isValidKeyword(keyword) {
        if (typeof keyword !== "string") return false;

        const pattern = /^[A-Za-z_][A-Za-z0-9_$]*$/;
        return pattern.test(keyword);
    }
}

module.exports = {
    SQL
}
