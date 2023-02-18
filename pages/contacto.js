import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { PopupButton } from 'react-calendly'
import ContactHero from '../components/hero/ContactHero'
import MainLayout from '../components/layout/MainLayout'

function Calendly ({ selector }) {
  const calendlyRef = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    calendlyRef.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  return mounted
    ? (
      <PopupButton
        url='https://calendly.com/engeldlgado/contacta-conmigo'
        text='Agenda una cita'
        className='inline-flex items-center px-6 py-2 text-base font-medium text-white transition-colors duration-500 border border-transparent rounded-md shadow-sm bg-secondary hover:bg-orange-400 dark:bg-primary dark:hover:bg-indigo-800'
        rootElement={document.querySelector(selector)}
      />
      )
    : null
}

const ContactPage = () => {
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
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+584242081347',
        contactType: 'customer service'
      },
      employee: {
        '@type': 'Person',
        name: 'Engelbert Vizcaya',
        jobTitle: 'Full Stack Developer',
        image: 'https://res.cloudinary.com/dxhsmq1pv/image/upload/v1674602092/engeldlgado/avatar_zxqozh.jpg',
        email: 'hola@engeldelgado.com',
        telephone: '+584242081347',
        birthDate: '1990-04-24',
        description: 'Soy Engelbert Vizcaya, Full Stack Developer con más de 10 años de experiencia en la industria. Mi experiencia incluye el uso de tecnologías como JavaScript, React, NextJS, Node.js, GraphQL, MongoDB y WordPress, así como HTML/CSS. Mi objetivo es entregar soluciones innovadoras y centradas en el cliente que superen las expectativas del negocio y cumplan los objetivos del proyecto. Soy una persona emprendedora y siempre busco entregar proyectos de alta calidad y cumplir con los requerimientos del cliente. Soy un buen colaborador en equipo con excelentes habilidades de comunicación y una pasión por la innovación.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Casco central de Los Teques',
          addressLocality: 'Los Teques',
          addressRegion: 'Miranda',
          postalCode: '1012',
          addressCountry: 'Venezuela'
        }
      }
    }
  ]

  return (
    <MainLayout
      title='Contacto | Engelbert Vizcaya - Soluciones de desarrollo web y marketing'
      description='Contáctanos para obtener soluciones innovadoras y centradas en el cliente para tu presencia en línea con nuestros servicios de desarrollo web y marketing. ¡Hablemos!'
      ogType='website'
      ogUrl='https://engeldelgado.com/contacto'
      ogImage='https://engeldelgado.com/imagenes/logo.jpg'
      ogDescription='Obtén soluciones innovadoras y centradas en el cliente para tu presencia en línea con nuestros servicios de desarrollo web y marketing. Contactanos para saber más.'
      schemaObject={structureData}
    >
      <ContactHero />
      {/* This element needs to be light to properly render calendly */}
      <section id='contact' data-theme='light' />
      <section className='relative py-16 bg-gray-50 dark:bg-base-100 sm:py-24 lg:py-24'>
        <div className='relative' aria-labelledby='contact-heading'>
          <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='relative bg-white shadow-xl'>
              <h2 id='contact-heading' className='sr-only'>
                Contáctame ahora mismo
              </h2>

              <div className='grid grid-cols-1 lg:grid-cols-3'>
                {/* Contact information */}
                <div className='relative px-6 py-10 overflow-hidden bg-gradient-to-b from-primary to-teal-600 sm:px-10 xl:p-12'>
                  {/* Decorative angle backgrounds */}
                  <div className='absolute inset-0 pointer-events-none sm:hidden' aria-hidden='true'>
                    <svg
                      className='absolute inset-0 w-full h-full'
                      width={343}
                      height={388}
                      viewBox='0 0 343 388'
                      fill='none'
                      preserveAspectRatio='xMidYMid slice'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
                        fill='url(#linear1)'
                        fillOpacity='.1'
                      />
                      <defs>
                        <linearGradient
                          id='linear1'
                          x1='254.553'
                          y1='107.554'
                          x2='961.66'
                          y2='814.66'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='#fff' />
                          <stop offset={1} stopColor='#fff' stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className='absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none sm:block lg:hidden'
                    aria-hidden='true'
                  >
                    <svg
                      className='absolute inset-0 w-full h-full'
                      width={359}
                      height={339}
                      viewBox='0 0 359 339'
                      fill='none'
                      preserveAspectRatio='xMidYMid slice'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
                        fill='url(#linear2)'
                        fillOpacity='.1'
                      />
                      <defs>
                        <linearGradient
                          id='linear2'
                          x1='192.553'
                          y1='28.553'
                          x2='899.66'
                          y2='735.66'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='#fff' />
                          <stop offset={1} stopColor='#fff' stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className='absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none lg:block'
                    aria-hidden='true'
                  >
                    <svg
                      className='absolute inset-0 w-full h-full'
                      width={160}
                      height={678}
                      viewBox='0 0 160 678'
                      fill='none'
                      preserveAspectRatio='xMidYMid slice'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
                        fill='url(#linear3)'
                        fillOpacity='.1'
                      />
                      <defs>
                        <linearGradient
                          id='linear3'
                          x1='192.553'
                          y1='325.553'
                          x2='899.66'
                          y2='1032.66'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='#fff' />
                          <stop offset={1} stopColor='#fff' stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className='text-lg font-medium text-white'>Información de contacto</h3>
                  <p className='max-w-3xl mt-6 text-base text-teal-50'>¿Listo para llevar tu proyecto al siguiente nivel? ¡Agenda una cita en mi calendario y comencemos a trabajar juntos!</p>
                  <dl className='mt-8 space-y-6'>
                    <dt>
                      <span className='sr-only'>Número de teléfono</span>
                    </dt>
                    <dd className='flex text-base text-teal-50'>
                      <PhoneIcon className='flex-shrink-0 w-6 h-6 text-teal-200' aria-hidden='true' />
                      <span className='ml-3'>+58 424 208-13-47</span>
                    </dd>
                    <dt>
                      <span className='sr-only'>Correo electrónico</span>
                    </dt>
                    <dd className='flex text-base text-teal-50'>
                      <MailIcon className='flex-shrink-0 w-6 h-6 text-teal-200' aria-hidden='true' />
                      <span className='ml-3'>hola@engeldelgado.com</span>
                    </dd>
                  </dl>
                  <div className='flex justify-center mt-12'>
                    <div className='grid grid-flow-col gap-4'>
                      <a href='https://github.com/engeldlgado' target='_blank' rel='noreferrer nofollow' aria-label='GitHub'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='text-teal-200 transition-colors duration-500 fill-current dark:hover:fill-primary hover:fill-secondary'><path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' /></svg></a>

                      <a href='https://www.linkedin.com/in/engelbertvizcaya/' target='_blank' rel='noreferrer nofollow' aria-label='LinkedIn'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='text-teal-200 transition-colors duration-500 fill-current dark:hover:fill-primary hover:fill-secondary'><path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' /></svg></a>
                      <a href='https://www.instagram.com/engeldlgado/' target='_blank' rel='noreferrer nofollow' aria-label='Instagram'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='text-teal-200 transition-colors duration-500 fill-current dark:hover:fill-primary hover:fill-secondary'><path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' /></svg></a>
                      <a href='https://www.twitter.com/engeldlgado/' target='_blank' rel='noreferrer nofollow' aria-label='Twitter'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='text-teal-200 transition-colors duration-500 fill-current dark:hover:fill-primary hover:fill-secondary'><path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' /></svg></a>

                    </div>
                  </div>
                </div>

                {/* Contact form */}
                <div className='px-6 py-10 text-center bg-white sm:px-10 lg:col-span-2 xl:p-12 dark:bg-gray-900'>
                  {/* Avatar rounded center */}
                  <div className='flex items-center justify-center pb-5'>
                    <div className='flex-shrink-0'>
                      <Image className='w-32 h-32 rounded-full shadow-lg' src='/imagenes/profile-pic.png' alt='Engelbert Vizcaya' width={128} height={128} />
                    </div>
                  </div>
                  <h3 className='text-xl font-medium text-center text-warm-gray-900'>Agenda una cita conmigo ahora</h3>
                  <p className='w-11/12 pt-5 mx-auto mt-1 mb-8 text-sm text-center text-warm-gray-500'>
                    Como Full Stack Developer, estoy aquí para ayudarte a crear sitios web impresionantes utilizando las últimas tecnologías y tendencias. Sigue mi blog para aprender más sobre desarrollo web y conviértete en un experto en Full Stack. Si estás listo para llevar tu proyecto al siguiente nivel, ¡contáctame para programar una cita y comenzar a trabajar juntos!
                  </p>
                  <Calendly selector='#contact' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </MainLayout>
  )
}

export default ContactPage
