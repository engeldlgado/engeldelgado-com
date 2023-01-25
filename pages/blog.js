import fs from 'fs'
import matter from 'gray-matter'
import MainLayout from '../components/layout/MainLayout'
import BlogHero from '../components/hero/BlogHero'
import MainBlog from '../components/blog/MainBlog'

export default function Blog ({ posts }) {
  const structureData = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    name: 'Blog de desarrollo web y tecnología | EngelDelgado',
    url: 'https://www.engeldelgado.com',
    description: 'Bienvenido a mi blog personal. Aquí podrás encontrar artículos sobre desarrollo web, tecnología y marketing digital. Si estás buscando aprender más sobre estos temas o quieres conocer mi opinión sobre los últimos avances, no dudes en seguir leyendo.',
    image: 'https://www.engeldelgado.com/imagenes/logo.jpg'
  }
  return (
    <MainLayout
      title='Blog de desarrollo web y tecnología | EngelDelgado'
      description='Bienvenido a mi blog personal. Aquí podrás encontrar artículos sobre desarrollo web, tecnología y marketing digital. Si estás buscando aprender más sobre estos temas o quieres conocer mi opinión sobre los últimos avances, no dudes en seguir leyendo.'
      ogType='website'
      ogUrl='https://engeldelgado.com'
      ogImage='https://engeldelgado.com/imagenes/Imagine-og.jpg'
      ogDescription='Bienvenido a mi blog personal. Aquí podrás encontrar artículos sobre desarrollo web, tecnología y marketing digital. Si estás buscando aprender más sobre estos temas o quieres conocer mi opinión sobre los últimos avances, no dudes en seguir leyendo.'
      schemaObject={structureData}
    >
      <BlogHero />
      <div className='relative py-16 bg-gray-50 dark:bg-base-100 sm:py-24 lg:py-24'>
        <div className='relative'>
          <div className='max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
            <h2 className='text-base font-semibold tracking-wider uppercase dark:text-primary text-secondary'>¡Aprende conmigo!</h2>
            <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
              Recursos Útiles
            </p>
            <p className='mx-auto mt-5 text-xl text-gray-500 dark:text-gray-50 max-w-prose'>
              Te mantendré actualizado sobre las últimas tendencias y te guiaré a través de cada paso para convertirte en un experto en el campo. ¡No te pierdas mi información valiosa y únete a mi comunidad de aprendizaje hoy!
            </p>
          </div>
          <MainBlog posts={posts} />
        </div>
      </div>
    </MainLayout>
  )
}

// Generating the Static Props for the Blog Page
export async function getStaticProps () {
  // get list of files from the posts folder
  const files = fs.readdirSync('post')

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const readFile = fs.readFileSync(`post/${fileName}`, 'utf-8')
    const { data: frontmatter } = matter(readFile)

    return {
      slug,
      frontmatter
    }
  })

  // Return the pages static props
  return {
    props: {
      posts
    }
  }
}
