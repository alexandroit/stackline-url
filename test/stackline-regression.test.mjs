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
