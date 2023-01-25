import fs from 'fs'
import matter from 'gray-matter'
import MainLayout from '../components/layout/MainLayout'
import MainHero from '../components/hero/MainHero'
import MidSection from '../components/sections/MidSection'

export default function Home ({ posts }) {
  const structureData = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      name: 'Soluciones de desarrollo web y marketing con 10 años de experiencia',
      url: 'https://www.engeldelgado.com',
      description: 'Soluciones innovadoras en diseño web y marketing con más de 10 años de experiencia. Explora mi trabajo y contáctame para saber cómo puedo ayudarte a alcanzar tus metas.',
      image: 'https://www.engeldelgado.com/imagenes/logo.jpg'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Engelbert Vizcaya',
      jobTitle: 'Full Stack Developer',
      image: 'https://res.cloudinary.com/dxhsmq1pv/image/upload/v1674602092/engeldlgado/avatar_zxqozh.jpg',
      url: 'https://engeldlgado.com',
      sameAs: [
        'https://www.facebook.com/engeldlgado',
        'https://twitter.com/engeldlgado',
        'https://www.linkedin.com/in/engelbertvizcaya/',
        'https://www.instagram.com/engeldlgado/',
        'https://github.com/engeldlgado'
      ],
      description: 'Soy Engelbert Vizcaya, Full Stack Developer con más de 10 años de experiencia en la industria. Mi experiencia incluye el uso de tecnologías como JavaScript, React, NextJS, Node.js, GraphQL, MongoDB y WordPress, así como HTML/CSS. Mi objetivo es entregar soluciones innovadoras y centradas en el cliente que superen las expectativas del negocio y cumplan los objetivos del proyecto. Soy una persona emprendedora y siempre busco entregar proyectos de alta calidad y cumplir con los requerimientos del cliente. Soy un buen colaborador en equipo con excelentes habilidades de comunicación y una pasión por la innovación.'
    }
  ]
  return (
    <>
      <MainLayout
        title='Soluciones de desarrollo web y marketing con 10 años de experiencia'
        description='Obtén soluciones innovadoras y centradas en el cliente para tu presencia en línea con nuestros servicios de desarrollo web y marketing. Contactanos para saber más.'
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
