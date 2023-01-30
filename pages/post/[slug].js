import fs from 'fs'
import matter from 'gray-matter'
import Prism from 'prismjs'
import 'prism-themes/themes/prism-one-dark.css'
import Post from '../../components/blog/Post'
import MainLayout from '../../components/layout/MainLayout'

const HOST = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

// The page for each post
export default function SinglePost ({ frontmatter, content, slug }) {
  // Destructure the frontmatter
  const { title, author, date, bannerImage, tags, excerpt } = frontmatter

  // Prism for code highlighting

  // date ISO 8601

  const dateFormated = date.split('-')
  const dateISO = `${dateFormated[2]}-${dateFormated[1]}-${dateFormated[0]}T00:00:00-04:00`

  const structureData = [
    {
      '@context': 'https://schema.org/',
      '@type': 'BlogPosting',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://engeldelgado.com/post/${slug}`
      },
      headline: title,
      description: excerpt,
      image: {
        '@type': 'ImageObject',
        url: bannerImage,
        width: '1920',
        height: '1080'
      },
      author: {
        '@type': 'Person',
        name: author,
        url: 'https://engeldelgado.com'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Engelbert Vizcaya',
        logo: {
          '@type': 'ImageObject',
          url: 'https://engeldelgado.com/imagenes/logo.jpg',
          width: '500',
          height: '500'
        }
      },
      datePublished: dateISO,
      dateModified: dateISO
    }
  ]

  return (
    <MainLayout
      title={`${title}`}
      description={excerpt}
      ogType='website'
      ogUrl={`https://engeldelgado.com/post/${slug}`}
      ogImage={HOST + `/api/og?title=${title}&excerpt=${excerpt}`}
      ogDescription={excerpt}
      schemaObject={structureData}
    >
      <Post heading={frontmatter}>
        <article className='mx-auto prose prose-img:rounded-md prose-img:shadow-md prose-code:break-words lg:prose-lg dark:prose-dark' dangerouslySetInnerHTML={{ __html: content }} />
        {/* hashtags */}
        <div className='flex flex-wrap justify-center mt-10'>
          {tags.map((tag, index) => (
            <div key={index} className='mr-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:underline'>
              #{tag.replace(/\s+/g, '-')}
            </div>
          ))}
        </div>
      </Post>
    </MainLayout>
  )
}

// Generating the paths for each post
export async function getStaticPaths () {
  // Get list of all files from our posts directory
  const files = fs.readdirSync('post')
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', '')
    }
  }))
  // return list of paths
  return {
    paths,
    fallback: false
  }
}

// Generate the static props for the page
export async function getStaticProps ({ params: { slug } }) {
  const fileName = fs.readFileSync(`post/${slug}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)
  // encoder utf-8
  const md = require('markdown-it')({
    html: true,
    highlight: function (str, lang) {
      // try to load the language dynamically for the code highlight
      if (lang && !Prism.languages[lang]) {
        try {
          require('prismjs/components/prism-' + lang + '.js')
        } catch (e) {
          console.log('Error loading language: ' + lang)
        }
      }
      // if the language is loaded, render it
      if (lang && Prism.languages[lang]) {
        return '<pre className="language-' + lang + '"><code className="language-' + lang + '">' + Prism.highlight(str, Prism.languages[lang], lang) + '</code></pre>'
      } else {
        return '<pre className="language-txt"><code className="language-txt">' + md.utils.escapeHtml(str) + '</code></pre>'
      }
    }
  })
  return {
    props: {
      frontmatter,
      content: md.render(content),
      slug
    }
  }
}
