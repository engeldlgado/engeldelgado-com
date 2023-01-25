import fs from 'fs'

const Sitemap = () => {
  return null
}

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = 'https://engeldlgado.com'

  const staticPaths = fs
    .readdirSync('pages')
    .filter((staticPage) => {
      return ![
        'api',
        '_app.js',
        '_document.js',
        '404.js',
        'sitemap.xml.js'
      ].includes(staticPage)
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`
    })

  const files = fs.readdirSync('post')

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    return `${BASE_URL}/post/${slug}`
  })

  const site = [...staticPaths, ...posts]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${site
        .map((url) => {
          const path = url
            .replace('.js', '')
            .replace('index', '')

            // if post page and not url with slug remove the path

            if (path.includes('/post/')) {
              return `
                <url>
                  <loc>${path}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>weekly</changefreq>
                  <priority>0.8</priority>
                </url>
              `
            } else if (path.endsWith('/post')) {
              return ''
            } else {
              return `
                <url>
                  <loc>${path}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>daily</changefreq>
                  <priority>1.0</priority>
                </url>
              `
            }
        })
        .join('')}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default Sitemap
