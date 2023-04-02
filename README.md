# <a href="https://www.npmjs.com/package/sanitize-sql">Sanitize-SQL</a>

A simple SQL sanitizer library to help prevent SQL injection attacks. Sanitize-SQL is designed to be used in conjunction with other security measures, such as prepared statements.

[![npm version](https://img.shields.io/npm/v/sanitize-sql.svg)](https://www.npmjs.com/package/sanitize-sql)
[![npm downloads](https://img.shields.io/npm/dt/sanitize-sql.svg)](https://www.npmjs.com/package/sanitize-sql)
[![GitHub release](https://img.shields.io/github/release/aaronmansfield5/Sanitize-SQL-NPM-Package.svg)](https://github.com/aaronmansfield5/Sanitize-SQL-NPM-Package/releases)
[![GitHub issues](https://img.shields.io/github/issues/aaronmansfield5/Sanitize-SQL-NPM-Package.svg)](https://github.com/aaronmansfield5/Sanitize-SQL-NPM-Package/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/aaronmansfield5/Sanitize-SQL-NPM-Package.svg)](https://github.com/aaronmansfield5/Sanitize-SQL-NPM-Package/pulls)
[![GitHub stars](https://img.shields.io/github/stars/aaronmansfield5/Sanitize-SQL-NPM-Package.svg)](https://github.com/aaronmansfield5/Sanitize-SQL-NPM-Package/stargazers)

## Installation

Using npm:

```sh
npm install sanitize-sql
```
## Usage
```js
const { SQL } = require("sanitize-sql");

const sql = new SQL();

const unsafeQuery = "SELECT * FROM users WHERE username='admin' AND password='password';";
const sanitizedQuery = sql.sanitize(unsafeQuery);

console.log(sanitizedQuery);
```
## API
`sanitize(query)`
Sanitize the values within an SQL query to prevent SQL injection.

- `query` (string) - The SQL query to sanitize.
Returns the sanitized SQL query as a string.

`addRestrictedKeyword(keyword)`

Add a restricted keyword to the list of keywords that should be removed from queries.

- `keyword` (string) - The restricted keyword to add.
`removeRestrictedKeyword(keyword)`

Remove a restricted keyword from the list of keywords that should be removed from queries.

- `keyword` (string) - The restricted keyword to remove.
`isValidKeyword(keyword)`

Check if the provided keyword is valid.

`keyword` (string) - The keyword to validate.

Returns true if the keyword is valid, false otherwise.

## Contributing
- Fork the repository on GitHub: https://github.com/aaronmansfield5/sanitize-sql
- Clone your forked repository locally
- Create a new branch for your changes
- Make your changes and commit them
- Push your changes to your forked repository on GitHub
- Create a Pull Request targeting the main branch

## Credits
Created by <a href="https://github.com/aaronmansfield5"><b>aaronmansfield5.</b></a>
