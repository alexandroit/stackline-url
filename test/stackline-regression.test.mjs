import assert from 'node:assert/strict'
import test from 'node:test'
import url from '../url.js'

test('hostless protocol matching ignores protocol case without changing payload case', () => {
  for (const protocol of ['javascript:', 'JAVASCRIPT:', 'JavaScript:']) {
    const parsed = url.parse(protocol + 'ALERT(DOCUMENT.DOMAIN)')
    assert.equal(parsed.protocol, 'javascript:')
    assert.equal(parsed.hostname, null)
    assert.equal(parsed.href, 'javascript:ALERT(DOCUMENT.DOMAIN)')
  }
  assert.equal(url.parse('HTTP://EXAMPLE.COM/A').href, 'http://example.com/A')
  assert.equal(url.parse('WS://EXAMPLE.COM/A').href, 'ws://example.com/A')
})

test('format only adds protocol-relative slashes when requested', () => {
  assert.equal(url.format({hostname: 'example.com', slashes: false}), 'example.com')
  assert.equal(url.format({hostname: 'example.com', slashes: true}), '//example.com')
  assert.equal(url.format({hostname: 'example.com'}), 'example.com')
  assert.equal(url.format({protocol: 'https:', hostname: 'example.com', pathname: 'a'}), 'https://example.com/a')
  assert.equal(url.format({protocol: 'mailto:', hostname: 'example.com', auth: 'user'}), 'mailto:user@example.com')
})


test('format escapes every hash in a query without creating a fragment', () => {
  const formatted = url.format({protocol: 'https:', hostname: 'example.com', search: '?a=#b#c'});
  assert.equal(formatted, 'https://example.com?a=%23b%23c');
  assert.equal(url.parse(formatted).hash, null);
});

test('auth preserves the first credential separator and escapes later colons', () => {
  assert.equal(url.format({protocol: 'https:', hostname: 'example.com', auth: 'user:pass:word'}), 'https://user:pass%3Aword@example.com');
  assert.equal(url.parse(url.format({protocol: 'https:', hostname: 'example.com', auth: 'user:pass:word'})).auth, 'user:pass:word');
});
