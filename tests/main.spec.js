// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('Test if sitemap is generated and its correct', () => {
  test('Sitemap is generated', async ({ page }) => {
    await page.goto('/sitemap.xml')
    const sitemap = await page.textContent('urlset')
    expect(sitemap).toContain('url')
  })
})

test.describe('Test Functionality of the Page', () => {
  test('Load index page', async ({ page }) => {
    await page.goto('/')
    const title = await page.textContent('h1')
    expect(title).toContain('Soluciones de desarrollo web')
  }
  )

  test('Load blog page', async ({ page }) => {
    await page.goto('/blog')
    const title = await page.textContent('h1')
    expect(title).toContain('Blog')
  })

  // Test if the blog has posts
  test('Blog page has post', async ({ page }) => {
    await page.goto('/blog')
    const posts = await page.$$('.post')
    expect(posts.length).toBeGreaterThan(0)
  })

  // Test if the page can navigate to a post
  test('Blog page can navigate to a post', async ({ page }) => {
    await page.goto('/blog')
    await page.click('.post:first-child a')
    const title = await page.textContent('h2')
    expect(title).toContain('Aplicación Escalable con Next.js y MongoDB')
  })

  // Test if the page can switch to dark mode
  test('Blog page can switch to dark mode', async ({ page }) => {
    await page.goto('/')
    await page.locator('[id="__next"] div').filter({ hasText: 'InicioAcerca de míBlogContacto.st0{clip-path:url(#SVGID_2_)}.st0{clip-path:url(#' }).locator('svg').nth(3).click()
    const darkMode = await page.$('.dark')
    const dataTheme = await page.getAttribute('html', 'data-theme')
    expect(darkMode).toBeTruthy()
    expect(dataTheme).toBe('dark')
  })

  // Test if the page can switch to light mode
  test('Blog page can switch to light mode', async ({ page }) => {
    await page.goto('/')
    await page.locator('[id="__next"] div').filter({ hasText: 'InicioAcerca de míBlogContacto.st0{clip-path:url(#SVGID_2_)}.st0{clip-path:url(#' }).locator('svg').nth(3).click()
    await page.locator('[id="__next"] div').filter({ hasText: 'InicioAcerca de míBlogContacto.st0{clip-path:url(#SVGID_2_)}.st0{clip-path:url(#' }).locator('svg').nth(4).click()
    const darkMode = await page.$('.dark')
    const dataTheme = await page.getAttribute('html', 'data-theme')
    expect(darkMode).toBeFalsy()
    expect(dataTheme).toBe('light')
  })
})
