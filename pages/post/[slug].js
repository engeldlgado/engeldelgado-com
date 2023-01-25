import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'
import Post from '../../components/blog/Post'
import MainLayout from '../../components/layout/MainLayout'

// The page for each post
export default function SinglePost ({ frontmatter, content, slug }) {
  // Destructure the frontmatter
  const { title, author, date, bannerImage, tags, excerpt } = frontmatter

  const structureData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://engeldelgado.com/post/${slug}`
    },
    headline: { title },
    image: [
      { bannerImage }
    ],
    datePublished: { date },
    dateModified: { date },
    author: {
      '@type': 'Person',
      name: { author }
    },
    publisher: {
      '@type': 'Organization',
      name: 'Engel Delgado',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.engeldelgado.com/imagenes/logo.jpg'
      }
    },
    description: { excerpt }
  }

  return (
    <MainLayout
      title={`${title} | Engel Delgado`}
      description={excerpt}
      ogType='website'
      ogUrl={`https://engeldelgado.com/post/${slug}`}
      ogImage={bannerImage}
      ogDescription={excerpt}
      schemaObject={structureData}
    >
      <Post heading={frontmatter}>
        <article className='mx-auto prose prose-img:rounded-md prose-img:shadow-md lg:prose-lg dark:prose-dark' dangerouslySetInnerHTML={{ __html: md().render(content) }} />
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
  return {
    props: {
      frontmatter,
      content,
      slug
    }
  }
}
