import fs from 'fs'
import matter from 'gray-matter'
import MainLayout from '../components/layout/MainLayout'
import MainHero from '../components/hero/MainHero'
import MidSection from '../components/sections/MidSection'

export default function Home ({ posts }) {
  const structureData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Soluciones de desarrollo web y marketing con 10 años de experiencia',
      alternateName: 'Engelbert Vizcaya | Full Stack Developer',
      url: 'https://engeldelgado.com',
      logo: 'https://engeldelgado.com/imagenes/logo.jpg',
      sameAs: [
        'https://www.twitter.com/engeldlgado/',
        'https://www.instagram.com/engeldlgado/',
        'https://www.linkedin.com/in/engelbertvizcaya/',
        'https://github.com/engeldlgado'
      ]
    },
    {
      '@context': 'http://www.schema.org',
      '@type': 'person',
      name: 'Engelbert Vizcaya',
      jobTitle: 'Full Stack Developer',
      url: 'https://engeldelgado.com',
      image: 'https://res.cloudinary.com/dxhsmq1pv/image/upload/v1674602092/engeldlgado/avatar_zxqozh.jpg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Casco central de Los Teques',
        addressLocality: 'Los Teques',
        addressRegion: 'Miranda',
        postalCode: '1012',
        addressCountry: 'Venezuela'
      },
      email: 'hola@engeldelgado.com',
      telephone: '+584242081347',
      birthDate: '1990-04-24',
      description: 'Soy Engelbert Vizcaya, Full Stack Developer con más de 10 años de experiencia en la industria. Mi experiencia incluye el uso de tecnologías como JavaScript, React, NextJS, Node.js, GraphQL, MongoDB y WordPress, así como HTML/CSS. Mi objetivo es entregar soluciones innovadoras y centradas en el cliente que superen las expectativas del negocio y cumplan los objetivos del proyecto. Soy una persona emprendedora y siempre busco entregar proyectos de alta calidad y cumplir con los requerimientos del cliente. Soy un buen colaborador en equipo con excelentes habilidades de comunicación y una pasión por la innovación.'
    }
  ]
  return (
    <>
      <MainLayout
        title='Soluciones de desarrollo web y marketing con 10 años de experiencia'
        description='Obtén soluciones innovadoras y centradas en el cliente para tu presencia en línea con nuestros servicios de desarrollo web y marketing. Contactanos ahora mismo'
        ogType='website'
        ogUrl='https://engeldelgado.com'
        ogImage='https://engeldelgado.com/imagenes/Imagine-og.jpg'
        ogDescription='Obtén soluciones innovadoras y centradas en el cliente para tu presencia en línea con nuestros servicios de desarrollo web y marketing. Contactanos para saber más.'
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
