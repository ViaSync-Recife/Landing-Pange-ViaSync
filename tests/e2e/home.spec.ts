import { expect, test } from '@playwright/test'

test('has no horizontal overflow at the mobile reference width', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 844 })
  await page.goto('/')
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy()
})

test('changes billing, FAQ, and install language without console errors', async ({ page }) => {
  const errors: string[] = []
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()) })
  await page.goto('/')
  await page.getByRole('tab', { name: /Annually/i }).click()
  await expect(page.getByText('$45.00')).toBeVisible()
  await page.getByRole('button', { name: 'CLI', exact: true }).click()
  await expect(page.getByText(/npm install -g @aeye\/cli/)).toBeVisible()
  await page.getByRole('button', { name: /How does integration work/i }).click()
  await expect(page.getByText(/setup takes under five minutes/i)).toBeVisible()
  expect(errors).toEqual([])
})
