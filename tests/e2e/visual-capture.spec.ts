import { mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { test } from '@playwright/test'

const output = join(process.cwd(), 'outputs', 'visual-comparison')

test('captures local at matching viewports', async ({ page }) => {
  mkdirSync(output, { recursive: true })
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.screenshot({ path: join(output, 'local-desktop-full.png'), fullPage: true })

  await page.setViewportSize({ width: 390, height: 844 })
  await page.reload({ waitUntil: 'networkidle' })
  await page.screenshot({ path: join(output, 'local-mobile-full.png'), fullPage: true })
})

test('captures live reference viewport for comparison', async ({ page }) => {
  mkdirSync(output, { recursive: true })
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('https://aeye-saas.webflow.io', { waitUntil: 'domcontentloaded', timeout: 45_000 })
  // The inspected Webflow reference begins behind a technical blue preloader.
  // Wait for its scripted sequence before capturing the settled hero.
  await page.waitForTimeout(8_000)
  await page.screenshot({ path: join(output, 'reference-desktop-viewport.png') })
  await page.screenshot({ path: join(output, 'reference-desktop-full.png'), fullPage: true })

  await page.setViewportSize({ width: 390, height: 844 })
  await page.reload({ waitUntil: 'domcontentloaded', timeout: 45_000 })
  await page.waitForTimeout(8_000)
  await page.screenshot({ path: join(output, 'reference-mobile-viewport.png') })
  await page.screenshot({ path: join(output, 'reference-mobile-full.png'), fullPage: true })
})
