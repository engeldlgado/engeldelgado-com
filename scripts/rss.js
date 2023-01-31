const matter = require('gray-matter')
const fs = require('fs')
const glob = require('glob')

const PORT = process.env.PORT || 3000
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`
async function genRSS () {
  console.log('Generating RSS.xml...')
  // get list of files from the posts folder
  const POSTS_DIR = 'post'
  let files = await glob.sync(`${POSTS_DIR}/**/*.md`)
  files = files.filter((file) => !file.includes('README.md'))

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const readFile = fs.readFileSync(fileName, 'utf8')
    const { data: frontmatter } = matter(readFile)
    // convert the date DD-MM-YYYY to new Date(YYYY, MM, DD)
    const postObj = structuredClone(frontmatter)
    const date = postObj.date.split('-')
    const newDate = new Date(date[2], date[1] - 1, date[0])
    postObj.date = newDate
    return {
      slug,
      frontmatter: postObj
    }
  })

  // sort posts by ID in descending order (newest first)
  posts.sort((a, b) => (a.frontmatter.id < b.frontmatter.id ? 1 : -1))

  // generate RSS feed

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Blog de soluciones de desarrollo web y marketing | Engel Delgado</title>
        <description>Aprende a mejorar tu presencia en línea con nuestros artículos de desarrollo web y marketing. Explora nuestras soluciones innovadoras y conviértete en un experto en el tema.</description>
        <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
        <link>${BASE_URL}</link>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <language>es</language>
        <image>
          <url>${BASE_URL}/images/logo.png</url>
          <title>Blog de soluciones de desarrollo web y marketing | Engel Delgado</title>
          <link>${BASE_URL}</link>
        </image>

        ${posts
          .map((post) => {
            return `
              <item>
                <title>${post.frontmatter.title}</title>
                <link>${BASE_URL}/${post.slug}</link>
                <dc:creator xmlns:dc="http://purl.org/dc/elements/1.1/">${post.frontmatter.author.name}</dc:creator>
                <pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate>
                <guid>${BASE_URL}/${post.slug}</guid>
                <description>${post.frontmatter.excerpt}</description>
              </item>
            `
          })
          .join('')}
      </channel>
    </rss>
  `
  fs.writeFileSync('public/rss.xml', rss)
  console.log('rss.xml generated')
}

genRSS()
