import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const settings = () => readFile(new URL('../web/settings.html', import.meta.url), 'utf8')

test('the settings screen has one heading and its three switches', async () => {
  const html = await settings()
  assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1)
  for (const name of ['notifications', 'sync', 'dark']) assert.match(html, new RegExp(`name="${name}"`))
})

test('WEB-004 the settings screen shows the heading and the line under it', async () => {
  const html = await settings()
  assert.match(html, /<h1>Harbor Lantern Settings<\/h1>\s*<p>Choose how the lantern app behaves on this phone\.<\/p>/)
})

