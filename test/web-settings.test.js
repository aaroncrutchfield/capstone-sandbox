import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const page = () => readFile(new URL('../web/settings.html', import.meta.url), 'utf8')

test('the settings screen has one heading and its three switches', async () => {
  const html = await page()
  assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1)
  for (const name of ['notifications', 'sync', 'dark']) assert.match(html, new RegExp(`name="${name}"`))
})

test('WEB-001 the settings screen shows the heading and the line under it', async () => {
  const html = await page()
  const heading = html.indexOf('<h1>Harbor Lantern Settings</h1>')
  const line = html.indexOf('Choose how the lantern app behaves on this phone.')
  assert.notEqual(heading, -1)
  assert.ok(line > heading, 'the line under the heading follows it')
})

test('WEB-002 the settings screen shows three switch rows with label, helper text and on or off state', async () => {
  const html = await page()
  const rows = [
    ['notifications', 'Notifications', 'Alerts when a tide warning is issued', true],
    ['sync', 'Sync over cellular', 'Uses mobile data when Wi-Fi is off', false],
    ['dark', 'Dark mode', 'Follows the phone unless set here', false],
  ]
  let last = -1
  for (const [name, label, helper, on] of rows) {
    const input = html.match(new RegExp(`<input[^>]*name="${name}"[^>]*>`))?.[0]
    assert.ok(input, `${name} switch exists`)
    assert.match(input, /type="checkbox"/)
    assert.match(input, /role="switch"/)
    assert.equal(/\schecked[\s>/]/.test(input), on, `${name} is ${on ? 'on' : 'off'}`)
    const at = html.search(new RegExp(`<strong[^>]*>${label}</strong>`))
    assert.ok(at > last, `${label} row follows the previous row`)
    assert.ok(html.indexOf(helper) > at, `${label} has its helper text`)
    last = at
  }
})

test('WEB-003 the settings screen ends with a Save settings button', async () => {
  const html = await page()
  const button = html.indexOf('<button type="button">Save settings</button>')
  assert.notEqual(button, -1)
  assert.ok(button > html.indexOf('name="dark"'), 'the button follows the last switch')
  assert.match(html, /button\s*\{[^}]*width:\s*100%/)
  assert.ok(html.indexOf('</main>') > button, 'the button sits inside the card')
})
