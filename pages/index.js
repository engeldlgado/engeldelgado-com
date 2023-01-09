import MainLayout from '../components/layout/MainLayout'
import MainHero from '../components/hero/MainHero'
import MidSection from '../components/sections/MidSection'

export default function Home () {
  return (
    <>
      <MainLayout
        title='Soluciones profesionales de desarrollo web y marketing'
        description='Ofrecemos servicios profesionales de desarrollo web y marketing para impulsar el crecimiento de tu empresa. Nuestro equipo de expertos se encargará de diseñar y desarrollar una página web atractiva y efectiva, y de implementar estrategias de marketing digital para llevar más tráfico y clientes potenciales a tu sitio web. ¡Contáctanos para más información!'
        ogType='website'
        ogUrl='https://engeldelgado.com'
        ogImage='https://engeldelgado.com'
        ogDescription='Ofrecemos servicios profesionales de desarrollo web y marketing para impulsar el crecimiento de tu empresa. Nuestro equipo de expertos se encargará de diseñar y desarrollar una página web atractiva y efectiva, y de implementar estrategias de marketing digital para llevar más tráfico y clientes potenciales a tu sitio web. ¡Contáctanos para más información!'
        schemaObject='{
          "@context": "http://schema.org",
          "@type": "WebSite",
          "name": "Soluciones profesionales de desarrollo web y marketing",
          "url": "https://www.engeldelgado.com",
          "description": "Ofrecemos servicios profesionales de desarrollo web y marketing para impulsar el crecimiento de tu empresa. Nuestro equipo de expertos se encargará de diseñar y desarrollar una página web atractiva y efectiva, y de implementar estrategias de marketing digital para llevar más tráfico y clientes potenciales a tu sitio web. ¡Contáctanos para más información!",
          "image": "https://www.engeldelgado.com/imagenes/logo.jpg"
        }'
      >
        {/* Main section start */}
        <MainHero />
        <MidSection />
      </MainLayout>
    </>
  )
}
