import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

test('the settings screen has one heading and its three switches', async () => {
  const html = await readFile(new URL('../web/settings.html', import.meta.url), 'utf8')
  assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1)
  for (const name of ['notifications', 'sync', 'dark']) assert.match(html, new RegExp(`name="${name}"`))
})
