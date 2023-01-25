import {
  GlobeIcon,
  DesktopComputerIcon,
  CodeIcon,
  SupportIcon,
  FastForwardIcon,
  RefreshIcon
} from '@heroicons/react/outline'
import Image from 'next/image'
import Logo from '../svg/Logo'
import MainBlog from '../blog/MainBlog'
import { PhoneIcon, MailIcon } from '@heroicons/react/solid'
const features = [
  {
    name: 'Sitios web personalizados',
    description: 'Te ayudaré a tener un sitio web único y adaptado a tus necesidades, ¡sin preocuparte por el proceso!',
    icon: GlobeIcon
  },
  {
    name: 'Diseño adaptable',
    description: 'Mi experiencia en diseño web garantizará que tu sitio web sea adaptable a diferentes dispositivos y pantallas, ¡sin esfuerzo adicional por tu parte!',
    icon: DesktopComputerIcon
  },
  {
    name: 'SPA y WebApps',
    description: 'Te ofrezco mi experiencia en JavaScript, Nextjs y React para crear aplicaciones web de una sola página y WebApps dinámicas y eficientes.',
    icon: CodeIcon
  },
  {
    name: 'Rendimiento óptimo',
    description: 'Mi enfoque en optimización de rendimiento asegurará que tu sitio web sea rápido y eficiente, ¡sin sacrificar la calidad!',
    icon: FastForwardIcon
  },
  {
    name: 'Integraciones fáciles',
    description: 'Te ayudaré a integrar servicios externos para añadir funcionalidades y mejorar la experiencia de usuario en tu sitio web, ¡sin complicaciones!',
    icon: RefreshIcon
  },
  {
    name: 'Soporte siempre disponible',
    description: 'Siempre estaré disponible para brindar soporte técnico y realizar mantenimiento en tu sitio web, ¡sin preocupaciones!',
    icon: SupportIcon
  }
]

export default function MidSection ({ posts }) {
  return (
    <>
      {/* Feature section with grid */}
      <div id='about' className='relative py-16 sm:py-24'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center'>

          <div className='relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0'>
            {/* Content area */}
            <div className='pt-6'>
              <h2 className='text-base font-semibold tracking-wider uppercase dark:text-white text-secondary'>Acerca de mi</h2>
              <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-indigo-500 sm:text-4xl'>
                El desarrollo web es mi pasión
              </p>
              <div className='mt-6 space-y-6 text-gray-500'>
                <p className='mx-auto mt-5 text-lg text-gray-500 dark:text-gray-50 max-w-prose'>
                  Soy Engelbert Vizcaya, Full Stack Developer con más de 10 años de experiencia en la industria. Mi experiencia incluye el uso de tecnologías como JavaScript, React, NextJS, Node.js, GraphQL, MongoDB y WordPress, así como HTML/CSS. Mi objetivo es entregar soluciones innovadoras y centradas en el cliente que superen las expectativas del negocio y cumplan los objetivos del proyecto. Soy una persona emprendedora y siempre busco entregar proyectos de alta calidad y cumplir con los requerimientos del cliente. Soy un buen colaborador en equipo con excelentes habilidades de comunicación y una pasión por la innovación.
                </p>

              </div>
            </div>

          </div>
          <div className='relative order-first py-16 lg:py-0 '>

            <div className='relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20'>
              <Image
                className='inset-0 object-cover w-full h-full'
                src='/imagenes/coding.png'
                alt='Coding'
                width={560}
                height={317}
              />
            </div>
          </div>
        </div>
      </div>
      <div id='work' className='relative bg-white dark:bg-base-100 sm:pt-10 lg:pt-24'>
        <div className='max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
          <h2 className='text-base font-semibold tracking-wider uppercase dark:text-white text-secondary'>Soluciones innovadoras para tu presencia en línea</h2>
          <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-indigo-500 sm:text-4xl'>
            Lo que necesitas para sobresalir en línea
          </p>
          <p className='mx-auto mt-5 text-xl text-gray-500 dark:text-gray-50 max-w-prose'>
            Mi experiencia en diseño web y marketing te ayudará a destacar en línea y atraer más clientes potenciales. Echa un vistazo a mi trabajo y contáctame para saber más sobre cómo puedo ayudarte a alcanzar tus metas.
          </p>

          <div className='mt-12'>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {features.map((feature) => (
                <div key={feature.name} className='pt-6'>
                  <div className='flow-root px-6 pb-8 rounded-lg bg-gray-50 dark:bg-gray-900'>
                    <div className='-mt-6'>
                      <div>
                        <span className='inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r dark:from-primary dark:to-indigo-400 from-secondary to-orange-300'>
                          <feature.icon className='w-6 h-6 text-white' aria-hidden='true' />
                        </span>
                      </div>
                      <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900 dark:text-indigo-500'>{feature.name}</h3>
                      <p className='mt-5 text-base text-gray-500 dark:text-gray-50'>{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className='py-16 mx-auto text-xl text-gray-500 dark:text-gray-50 max-w-prose'>
            Con mi enfoque innovador y llamativo en diseño web y marketing, puedo ayudarte a mejorar tu presencia en línea y atraer más clientes potenciales. No dudes en ponerte en contacto conmigo para obtener más información sobre cómo puedo ayudarte a alcanzar tus metas.
          </p>
        </div>
      </div>

      {/* Testimonial section */}
      <div className='py-16 bg-white dark:bg-base-100 lg:py-12'>
        <div className='relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='relative px-8 py-24 overflow-hidden shadow-2xl bg-secondary dark:bg-primary rounded-xl lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8'>
            <div className='absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply'>
              <Image
                className='object-cover lg:h-full lg:w-full'
                src='/imagenes/diseno-web-innovador.jpg'
                alt='La programación es el motor de la innovación'
                fill
              />
            </div>
            <div className='relative lg:col-span-1'>
              <Logo className='w-auto h-12 fill-white' />
              <blockquote className='mt-6 text-white'>
                <p className='text-xl font-medium sm:text-2xl'>
                  La programación es el motor de la innovación. Con ella, podemos dar vida a nuestras ideas y transformar el mundo a nuestro alrededor.
                </p>
                <footer className='mt-6'>
                  <p className='flex flex-col font-medium'>
                    <span>Engelbert Vizcaya</span>
                    <span className='text-sm'>Full-Stack Developer</span>
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* TODO:Blog section */}
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

      {/* CTA Section */}
      <div id='contact' className='relative bg-gray-900 dark:bg-neutral'>
        <div className='relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2'>
          <Image
            className='object-cover w-full h-full'
            src='/imagenes/soporte-especializado.jpg'
            alt='Mentoring y soporte especializado'
            width={927}
            height={504}
          />
          <div
            aria-hidden='true'
            className='absolute inset-0 bg-gradient-to-b from-white to-orange-200 dark:from-white dark:to-primary mix-blend-multiply'
          />
        </div>
        <div className='relative max-w-md px-4 py-12 mx-auto sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32'>
          <div className='md:ml-auto md:w-1/2 md:pl-10'>
            <h2 className='text-base font-semibold tracking-wider text-gray-300 uppercase'>
              Mi compromiso contigo
            </h2>
            <p className='mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>Estoy aquí para ayudarte</p>
            <p className='mt-3 text-lg text-gray-300'>
              Mi compromiso contigo es brindarte un soporte excepcional en todo momento. Estoy disponible para ayudarte en cualquier problema o pregunta que puedas tener. ¡No dudes en contactarme!
            </p>
            <div className='mt-8'>
              <div className='inline-flex'>
                {/* <a
                  href='#'
                  className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-50'
                >
                  Contacto
                  <ExternalLinkIcon className='w-5 h-5 ml-3 -mr-1 text-gray-400' aria-hidden='true' />
                </a> */}
                {/* Contact Info */}
                <div className='flex justify-center px-5 py-3 font-medium'>
                  <div className='flex items-center mr-1 text-white duration-300 hover:text-primary'>
                    <MailIcon className='w-5 h-5 mr-1 ' aria-hidden='true' />
                    <a href='mailto:hola@engeldelgado.com'>
                      hola@engeldelgado.com
                    </a>
                  </div>
                  <div className='flex items-center ml-5 text-white duration-300 hover:text-primary'>
                    <PhoneIcon className='w-5 h-5 mr-1' aria-hidden='true' />
                    <a href='tel:+584242081347'>
                      +58 424 208 13 47
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
