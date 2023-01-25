import Image from 'next/image'
import { ClockIcon } from '@heroicons/react/solid'

const Post = ({ heading, children }) => {
  const { title, author, category, date, bannerImage, excerpt, avatar } = heading
  return (
    <>
      {/* Header */}
      <div className='relative pb-32 bg-gray-800'>
        <div className='absolute inset-0'>
          <Image
            className='object-cover w-full h-full'
            src={bannerImage}
            alt={title}
            width={1920}
            height={1080}
          />
          <div className='absolute inset-0 bg-gradient-to-br from-secondary to-gray-900 dark:from-primary dark:to-base-100 opacity-80 sm:opacity-60' aria-hidden='true' />
        </div>
        <div className='relative px-4 pt-32 pb-24 mx-auto text-center sm:text-left max-w-7xl sm:pb-24 sm:pt-44 sm:px-6 lg:px-8'>
          <h1 className='text-2xl font-extrabold tracking-tight text-white md:text-3xl lg:text-3xl'>{title}</h1>
          <p className='max-w-3xl mt-6 text-lg text-gray-50 drop-shadow'>
            {excerpt}
          </p>
          <div className='flex items-center justify-center mt-6 text-white drop-shadow sm:justify-start'>
            <div className='flex items-center'>
              <Image className='w-10 h-10 rounded-full drop-shadow' src={avatar} alt={author.name} width={500} height={500} />
              <p className='ml-3 text-sm font-medium text-white drop-shadow'>{author.name}</p>
            </div>
            <time className='flex items-center ml-6 text-sm font-medium text-white drop-shadow' dateTime={date}>
              <ClockIcon className='flex-shrink-0 w-5 h-5 mr-2 text-white drop-shadow' aria-hidden='true' />
              <span>{date}</span>
            </time>
            <div className='flex items-center ml-6 text-sm font-medium text-white drop-shadow'>
              <span>{category}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping cards */}
      <section className='mx-2'>
        <div className='relative z-10 px-4 pt-10 pb-16 mx-auto mb-20 -mt-32 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-900 max-w-fit sm:px-6 lg:px-8'>
          {children}
        </div>
      </section>
    </>
  )
}

export default Post
