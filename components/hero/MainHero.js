import { ChevronRightIcon } from '@heroicons/react/solid'
import Image from 'next/image'

export default function MainHero () {
  return (
    <div className='pt-10 bg-gradient-to-br from-secondary via-white dark:from-primary dark:via-base-100 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden'>
      <div className='mx-auto max-w-7xl lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
          <div className='max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
            <div className='pt-32 lg:pt-56 lg:pb-24'>
              <a
                href='#'
                className='inline-flex items-center p-1 pr-2 text-white bg-black rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200'
              >
                <span className='px-3 py-0.5 dark:text-white text-black text-xs font-semibold leading-5 uppercase tracking-wide dark:bg-primary bg-secondary rounded-full'>
                  Soluciones para tu negocio
                </span>
                <span className='ml-4 text-sm'>Mira nuestros servicios</span>
                <ChevronRightIcon className='w-5 h-5 ml-2 text-gray-500' aria-hidden='true' />
              </a>
              <h1 className='mt-4 text-4xl font-extrabold tracking-tight dark:text-white text-neutral sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                <span className='block'>Soluciones de</span>
                <span className='block text-secondary dark:text-primary'>desarrollo web y marketing</span>
              </h1>
              <p className='mt-3 text-base dark:text-gray-300 text-neutral sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                Ofrecemos soluciones personalizadas para impulsar el crecimiento de tu empresa, llevar más tráfico y clientes potenciales a tu sitio web. ¡Contáctanos para más información!
              </p>
              <div className='mt-10 sm:mt-12'>
                <p className='mt-3 text-sm dark:text-gray-300 text-neutral sm:mt-4'>
                  ¡Haz crecer tu empresa con nuestras soluciones de desarrollo web y marketing! Escríbenos a <a href='#' className='font-medium dark:text-white'>contáctanos</a> para más información.
                </p>
              </div>
              <div className='min-h-fit' />
            </div>
          </div>

          <div className='z-0 mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:mt-16 lg:relative'>
            <div className='max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              <Image
                className='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                src='/imagenes/engeldlgado-web-dev.svg'
                alt='Engel Delgado Full Stack Developer'
                width={769}
                height={624}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
