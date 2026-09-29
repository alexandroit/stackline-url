# @stackline/url

> The core `url` packaged standalone for use with Browserify.

[![npm version](https://img.shields.io/npm/v/@stackline/url.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/url)
[![license](https://img.shields.io/npm/l/@stackline/url.svg?style=flat-square)](https://github.com/alexandroit/stackline-url)
[![GitHub repository](https://img.shields.io/badge/GitHub-alexandroit%2Fstackline-url-181717?style=flat-square&logo=github)](https://github.com/alexandroit/stackline-url)
[![Docs](https://img.shields.io/badge/docs-alexandro.net-0f766e?style=flat-square)](https://alexandro.net/docs/vanilla/url/)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation](https://alexandro.net/docs/vanilla/url/)** | **[npm](https://www.npmjs.com/package/@stackline/url)** | **[Issues](https://github.com/alexandroit/stackline-url/issues)** | **[Repository](https://github.com/alexandroit/stackline-url)**

**Current package version:** `1.0.1`

---

## Why this package?

`@stackline/url` is the Stackline-maintained distribution of `url@0.11.4`. It is an independent continuation of [url](https://github.com/defunctzombie/node-url); original authors and licenses remain credited below.

## Compatibility

| Item | Value |
| :--- | :--- |
| Package | `@stackline/url@1.0.1` |
| API target | `url@0.11.4` |
| Supported Node.js | `>= 0.4` |
| License | `MIT` |
| Main entry | `./url.js` |
| Runtime dependencies | `qs, punycode` |

## Installation

```bash
npm install @stackline/url
```

Preserve existing imports and plugin resolution with an npm alias:

```bash
npm install url@npm:@stackline/url
```

## Usage and API reference

### node-url


This module has utilities for URL resolution and parsing meant to have feature parity with node.js core [url](http://nodejs.org/api/url.html) module.

```js
var url = require('@stackline/url');
```

## api

Parsed URL objects have some or all of the following fields, depending on
whether or not they exist in the URL string. Any parts that are not in the URL
string will not be in the parsed object. Examples are shown for the URL

`'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'`

* `href`: The full URL that was originally parsed. Both the protocol and host are lowercased.

    Example: `'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'`

* `protocol`: The request protocol, lowercased.

    Example: `'http:'`

* `host`: The full lowercased host portion of the URL, including port
  information.

    Example: `'host.com:8080'`

* `auth`: The authentication information portion of a URL.

    Example: `'user:pass'`

* `hostname`: Just the lowercased hostname portion of the host.

    Example: `'host.com'`

* `port`: The port number portion of the host.

    Example: `'8080'`

* `pathname`: The path section of the URL, that comes after the host and
  before the query, including the initial slash if present.

    Example: `'/p/a/t/h'`

* `search`: The 'query string' portion of the URL, including the leading
  question mark.

    Example: `'?query=string'`

* `path`: Concatenation of `pathname` and `search`.

    Example: `'/p/a/t/h?query=string'`

* `query`: Either the 'params' portion of the query string, or a
  querystring-parsed object.

    Example: `'query=string'` or `{'query':'string'}`

* `hash`: The 'fragment' portion of the URL including the pound-sign.

    Example: `'#hash'`

The following methods are provided by the URL module:

### url.parse(urlStr, [parseQueryString], [slashesDenoteHost])

Take a URL string, and return an object.

Pass `true` as the second argument to also parse
the query string using the `querystring` module.
Defaults to `false`.

Pass `true` as the third argument to treat `//foo/bar` as
`{ host: 'foo', pathname: '/bar' }` rather than
`{ pathname: '//foo/bar' }`. Defaults to `false`.

### url.format(urlObj)

Take a parsed URL object, and return a formatted URL string.

* `href` will be ignored.
* `protocol` is treated the same with or without the trailing `:` (colon).
  * The protocols `http`, `https`, `ftp`, `gopher`, `file` will be
    postfixed with `://` (colon-slash-slash).
  * All other protocols `mailto`, `xmpp`, `aim`, `sftp`, `foo`, etc will
    be postfixed with `:` (colon)
* `auth` will be used if present.
* `hostname` will only be used if `host` is absent.
* `port` will only be used if `host` is absent.
* `host` will be used in place of `hostname` and `port`
* `pathname` is treated the same with or without the leading `/` (slash)
* `search` will be used in place of `query`
* `query` (object; see `querystring`) will only be used if `search` is absent.
* `search` is treated the same with or without the leading `?` (question mark)
* `hash` is treated the same with or without the leading `#` (pound sign, anchor)

### url.resolve(from, to)

Take a base URL, and a href URL, and resolve them as a browser would for
an anchor tag.  Examples:

    url.resolve('/one/two/three', 'four')         // '/one/two/four'
    url.resolve('http://example.com/', '/one')    // 'http://example.com/one'
    url.resolve('http://example.com/one', '/two') // 'http://example.com/two'

## Credits and original authors

- Original project: [url](https://github.com/defunctzombie/node-url).
- defunctzombie.
- Copyright 2014 Joyent, Inc. and other Node contributors.
- Stackline maintenance: [Alexandro Paixao Marques](https://www.linkedin.com/in/aleinfo/) and [Stackline contributors](https://github.com/alexandroit).

Original copyright, license notices and contributor acknowledgements remain part of this distribution. Stackline maintenance does not replace authorship of the original work.

## License

`MIT`. See the license and notice files in the [repository](https://github.com/alexandroit/stackline-url).

## Community and Links

- [Stackline website](https://alexandro.net/)
- [GitHub projects](https://github.com/alexandroit)
- [npm packages](https://www.npmjs.com/~alex360qc)
- [Reddit community — r/Stackline](https://www.reddit.com/r/Stackline/)
- [Maintainer LinkedIn](https://www.linkedin.com/in/aleinfo/)

Use this repository's issue tracker for reproducible bugs and feature requests. Join r/Stackline for examples, usage questions and release discussions.
