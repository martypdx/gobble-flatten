# gobble-flatten

Simple gobble transformation that flattens all files in folders and subfolders with gobble

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-flatten
```

## Usage

**gobblefile.js**

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'someFolder' ).transform( 'flatten' );
```

Transforms:

```
|- file1.js
|- file2.js
|- folder1
   |- file3.js
   |- file4.js
|- folder2
   |- file5.js
|- folder3
```

Into:

```
|- file1.js
|- file2.js
|- file3.js
|- file4.js
|- file5.js
```

Use gobble's built in [`include`](https://github.com/gobblejs/gobble/wiki/API-reference#nodeinclude-patterns-) and [`exlcude`](https://github.com/gobblejs/gobble/wiki/API-reference#nodeexclude-patterns-) to filter results:

```
gobble( 'someFolder' ).include( '**/*.html' ).transform( 'flatten' );
```

Duplicate file names currently handled on a last-wins basis.

## Tests

Uses [gobble-test](https://github.com/gobblejs/gobble-test) example based testing. Run via:

```bash
npm test
```

## Credits

Uses [sander](https://github.com/rich-harris/sander) for recursive directory listing and promised-based file system access.

## License

MIT. Copyright 2015 Marty Nelson
