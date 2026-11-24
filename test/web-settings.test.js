import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const html = await readFile(new URL('../web/settings.html', import.meta.url), 'utf8')

test('WEB-001 the settings screen shows the heading and the line under it', () => {
  const heading = html.indexOf('<h1>Harbor Lantern Settings</h1>')
  const line = html.indexOf('<p>Choose how the lantern app behaves on this phone.</p>')
  assert.notEqual(heading, -1)
  assert.ok(line > heading)
  assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1)
})

test('WEB-002 the settings screen shows its three switch rows with label, helper text and state', () => {
  const rows = html.match(/<li>[\s\S]*?<\/li>/g) ?? []
  const expected = [
    ['Notifications', 'Alerts when a tide warning is issued', true],
    ['Sync over cellular', 'Uses mobile data when Wi-Fi is off', false],
    ['Dark mode', 'Follows the phone unless set here', false],
  ]
  assert.equal(rows.length, 3)
  expected.forEach(([label, helper, on], i) => {
    assert.ok(rows[i].includes(`>${label}</strong>`), `row ${i + 1} label`)
    assert.ok(rows[i].includes(`>${helper}</span>`), `row ${i + 1} helper text`)
    assert.match(rows[i], /<input type="checkbox" role="switch"/)
    assert.equal(/\schecked[\s>]/.test(rows[i]), on, `row ${i + 1} state`)
  })
})

test('WEB-003 the settings screen ends with a Save settings button', () => {
  const main = html.slice(html.indexOf('<main>'), html.indexOf('</main>')).trimEnd()
  assert.ok(main.endsWith('</footer>'))
  const footer = main.slice(main.lastIndexOf('<footer>'))
  assert.ok(footer.includes('<button type="button">Save settings</button>'))
})
