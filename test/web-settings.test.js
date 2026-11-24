import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const settings = () => readFile(new URL('../web/settings.html', import.meta.url), 'utf8')

const rows = [
  { name: 'notifications', label: 'Notifications', help: 'Alerts when a tide warning is issued', on: true },
  { name: 'sync', label: 'Sync over cellular', help: 'Uses mobile data when Wi-Fi is off', on: false },
  { name: 'dark', label: 'Dark mode', help: 'Follows the phone unless set here', on: false },
]

test('the settings screen has one heading and its three switches', async () => {
  const html = await settings()
  assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1)
  for (const name of ['notifications', 'sync', 'dark']) assert.match(html, new RegExp(`name="${name}"`))
})

test('WEB-004 the settings screen shows the heading and the line under it', async () => {
  const html = await settings()
  assert.match(html, /<h1>Harbor Lantern Settings<\/h1>\s*<p>Choose how the lantern app behaves on this phone\.<\/p>/)
})

test('WEB-005 the settings screen shows its three switch rows with label, helper text and state', async () => {
  const html = await settings()
  const found = rows.map(row => html.match(new RegExp(`<label[^>]*>(?:(?!</label>).)*name="${row.name}"(?:(?!</label>).)*</label>`, 's'))?.[0])
  rows.forEach((row, i) => {
    assert.ok(found[i], `no row for ${row.name}`)
    assert.ok(found[i].includes(row.label), `${row.name} row lacks its label`)
    assert.ok(found[i].includes(row.help), `${row.name} row lacks its helper text`)
    assert.equal(/\schecked[\s>]/.test(found[i]), row.on, `${row.name} row has the wrong state`)
    assert.match(found[i], /role="switch"/)
  })
})

