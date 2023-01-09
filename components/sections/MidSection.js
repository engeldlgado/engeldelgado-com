import {
  GlobeIcon,
  DesktopComputerIcon,
  SearchIcon,
  ChartBarIcon,
  ShareIcon,
  SupportIcon
} from '@heroicons/react/outline'
import { ExternalLinkIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Logo from '../svg/Logo'
const features = [
  {
    name: 'Estrategias de marketing digital',
    description: 'Ofrecemos servicios de marketing digital para ayudar a tu empresa a llegar a más clientes potenciales y aumentar su visibilidad en línea.',
    icon: GlobeIcon
  },
  {
    name: 'Diseño web atractivo y moderno',
    description: 'Nuestros diseñadores profesionales crearán un sitio web atractivo y moderno que destaque entre la competencia.',
    icon: DesktopComputerIcon
  },
  {
    name: 'Optimización SEO',
    description: 'Nuestros expertos en SEO mejorarán la visibilidad de tu sitio web en los motores de búsqueda y te ayudarán a obtener más tráfico orgánico.',
    icon: SearchIcon
  },
  {
    name: 'Análisis y estadísticas',
    description: 'Ofrecemos análisis y estadísticas detalladas para ayudarte a comprender cómo se está desempeñando tu sitio web y a tomar decisiones informadas.',
    icon: ChartBarIcon
  },
  {
    name: 'Integraciones con redes sociales',
    description: 'Nuestras integraciones con redes sociales te permitirán conectarte con tus seguidores y aumentar la presencia de tu marca en línea.',
    icon: ShareIcon
  },
  {
    name: 'Soporte técnico siempre disponible',
    description: 'Contamos con un equipo de soporte técnico disponible las 24 horas del día para resolver cualquier problema o pregunta que puedas tener.',
    icon: SupportIcon
  }
]
const blogPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: 'Article', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#'
    },
    readingLength: '6 min'
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { name: 'Video', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#'
    },
    readingLength: '4 min'
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: 'Case Study', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#'
    },
    readingLength: '11 min'
  }
]

const MidSection = () => {
  return (
    <>
      {/* Feature section with grid */}
      <div className='relative py-16 bg-white dark:bg-base-100 sm:py-24 lg:py-24'>
        <div className='max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
          <h2 className='text-base font-semibold tracking-wider uppercase dark:text-white text-secondary'>Soluciones profesionales para tu presencia en línea</h2>
          <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-indigo-500 sm:text-4xl'>
            Todo lo que necesitas para destacar en línea
          </p>
          <p className='mx-auto mt-5 text-xl text-gray-500 dark:text-gray-50 max-w-prose'>
            Nuestros servicios de desarrollo web y marketing profesionales te ayudarán a mejorar la presencia de tu empresa en línea y a alcanzar más clientes potenciales. Trabajamos contigo para entender tus objetivos y crear una estrategia personalizada para lograrlos.
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
            <h2 className='text-base font-semibold tracking-wider uppercase dark:text-primary text-secondary'>Learn</h2>
            <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
              Helpful Resources
            </p>
            <p className='mx-auto mt-5 text-xl text-gray-500 dark:text-gray-50 max-w-prose'>
              Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
              malesuada. Eleifend condimentum id viverra nulla.
            </p>
          </div>
          <div className='grid max-w-md gap-8 px-4 mx-auto mt-12 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl'>
            {blogPosts.map((post) => (
              <div key={post.id} className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
                <div className='flex-shrink-0'>
                  <img className='object-cover w-full h-48' src={post.imageUrl} alt={post.title} fill />
                </div>
                <div className='flex flex-col justify-between flex-1 p-6 bg-white dark:bg-gray-900'>
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-secondary dark:text-primary'>
                      <a href={post.category.href} className='hover:underline'>
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className='block mt-2'>
                      <p className='text-xl font-semibold text-gray-900 dark:text-gray-50'>{post.title}</p>
                      <p className='mt-3 text-base text-gray-500 dark:text-gray-200'>{post.preview}</p>
                    </a>
                  </div>
                  <div className='flex items-center mt-6'>
                    <div className='flex-shrink-0'>
                      <a href={post.author.href}>
                        <img className='w-10 h-10 rounded-full' src={post.author.imageUrl} alt={post.author.name} />
                      </a>
                    </div>
                    <div className='ml-3'>
                      <p className='text-sm font-medium text-gray-900'>
                        <a href={post.author.href} className='hover:underline'>
                          {post.author.name}
                        </a>
                      </p>
                      <div className='flex space-x-1 text-sm text-gray-500'>
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden='true'>&middot;</span>
                        <span>{post.readingLength} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='relative bg-gray-900 dark:bg-neutral'>
        <div className='relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2'>
          <img
            className='object-cover w-full h-full'
            src='/imagenes/soporte-especializado.jpg'
            alt=''
          />
          <div
            aria-hidden='true'
            className='absolute inset-0 bg-gradient-to-b from-white to-orange-200 dark:from-white dark:to-primary mix-blend-multiply'
          />
        </div>
        <div className='relative max-w-md px-4 py-12 mx-auto sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32'>
          <div className='md:ml-auto md:w-1/2 md:pl-10'>
            <h2 className='text-base font-semibold tracking-wider text-gray-300 uppercase'>
              Award winning support
            </h2>
            <p className='mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>We’re here to help</p>
            <p className='mt-3 text-lg text-gray-300'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
              scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
              tincidunt duis.
            </p>
            <div className='mt-8'>
              <div className='inline-flex rounded-md shadow'>
                <a
                  href='#'
                  className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-50'
                >
                  Visit the help center
                  <ExternalLinkIcon className='w-5 h-5 ml-3 -mr-1 text-gray-400' aria-hidden='true' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MidSection
