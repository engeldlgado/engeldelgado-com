import fs from 'fs'
import matter from 'gray-matter'
import MainLayout from '../components/layout/MainLayout'
import MainHero from '../components/hero/MainHero'
import MidSection from '../components/sections/MidSection'

export default function Home ({ posts }) {
  const structureData = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    name: 'Soluciones profesionales de desarrollo web y marketing | EngelDelgado',
    url: 'https://www.engeldelgado.com',
    description: 'Bienvenido a mi web personal. Aquí podrás ver algunos de los proyectos en los que he trabajado y mis habilidades en desarrollo web. Si estás buscando un profesional para mejorar tu presencia en línea, no dudes en contactarme para discutir cómo podemos trabajar juntos.',
    image: 'https://www.engeldelgado.com/imagenes/logo.jpg'
  }
  return (
    <>
      <MainLayout
        title='Soluciones profesionales de desarrollo web y marketing | EngelDelgado'
        description='Bienvenido a mi web personal. Aquí podrás ver algunos de los proyectos en los que he trabajado y mis habilidades en desarrollo web. Si estás buscando un profesional para mejorar tu presencia en línea, no dudes en contactarme para discutir cómo podemos trabajar juntos.'
        ogType='website'
        ogUrl='https://engeldelgado.com'
        ogImage='https://engeldelgado.com/imagenes/Imagine-og.jpg'
        ogDescription='Bienvenido a mi web personal. Aquí podrás ver algunos de los proyectos en los que he trabajado y mis habilidades en desarrollo web. Si estás buscando un profesional para mejorar tu presencia en línea, no dudes en contactarme para discutir cómo podemos trabajar juntos.'
        schemaObject={structureData}
      >
        {/* Main section start */}
        <MainHero />
        <MidSection posts={posts} />
      </MainLayout>
    </>
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
