# Sanitize-SQL-NPM-Package

<a href="https://www.npmjs.com/package/sanitize-sql">![npm](https://img.shields.io/npm/v/sanitize-sql)</a>
<a href="https://github.com/aaronmansfield5/Sanitize-SQL-NPM-Package/issues">![GitHub issues](https://img.shields.io/github/issues/aaronmansfield5/sanitize-sql-npm-package)</a>
<a href="https://github.com/aaronmansfield5/Sanitize-SQL-NPM-Package/stargazers">![GitHub stars](https://img.shields.io/github/stars/aaronmansfield5/sanitize-sql-npm-package)</a>

Sanitize-SQL-NPM-Package is a lightweight and easy-to-use Node.js module designed to help protect your database from SQL injection attacks by sanitizing SQL query values. It provides a simple API to escape single quotes and remove potentially dangerous keywords from SQL queries. While not a comprehensive security solution, Sanitize-SQL-NPM-Package is an essential tool to complement other security measures, such as using prepared statements, for a more robust database defense.

## Installation

```bash
npm install sanitize-sql-npm-package
```

## Usage
```javascript
const { SQL } = require('sanitize-sql-npm-package');

const sql = new SQL();
const unsanitizedQuery = "SELECT * FROM users WHERE name = 'John' OR '1'='1';";
const sanitizedQuery = sql.sanitize(unsanitizedQuery);

console.log(sanitizedQuery);
```

## API
### sanitize(query: string): string
Sanitizes the given SQL query by escaping single quotes and removing potentially dangerous keywords.

### addRestrictedKeyword(keyword: string): void
Adds a new restricted keyword to the list of keywords that should be removed from queries.

### removeRestrictedKeyword(keyword: string): void
Removes a restricted keyword from the list of keywords that should be removed from queries.

### isValidKeyword(keyword: string): boolean
Checks if the provided keyword is valid.

## Contributing
- Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
- Please make sure to update tests as appropriate.
