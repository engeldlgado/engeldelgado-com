import Link from 'next/link'
import Image from 'next/image'

const MainBlog = ({ posts }) => {
  return (
    <div className='grid max-w-md gap-8 px-4 mx-auto mt-12 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl'>
      {posts.map(post => {
        // extract slug and frontmatter
        const { slug, frontmatter } = post
        // extract frontmatter properties
        const { id, title, author, category, date, bannerImage, excerpt, avatar, readTime } = frontmatter
        const postLink = `/post/${slug}`
        return (

          <div key={id} className='flex flex-col overflow-hidden rounded-lg shadow-lg post'>
            <div className='flex-shrink-0'>
              <Link href={postLink}>
                <Image className='object-cover w-full h-48' src={bannerImage} alt={title} width={384} height={192} />
              </Link>
            </div>
            <div className='flex flex-col justify-between flex-1 p-6 bg-white dark:bg-gray-900'>
              <div className='flex-1'>
                <p className='text-sm font-medium text-secondary dark:text-primary'>
                  {category}
                </p>
                <Link href={postLink} className='block mt-2'>
                  <p className='text-xl font-semibold text-gray-900 dark:text-gray-50'>{title}</p>
                  <p className='mt-3 text-base text-gray-500 dark:text-gray-200'>{excerpt}</p>
                </Link>
              </div>
              <div className='flex items-center mt-6'>
                <div className='flex-shrink-0'>
                  <a href={author.url}>
                    <Image className='w-10 h-10 rounded-full' src={avatar} alt={author.name} width={500} height={500} />
                  </a>
                </div>
                <div className='ml-3'>
                  <p className='text-sm font-medium text-gray-900 dark:text-gray-50'>
                    <a href={author.url} className='hover:underline'>
                      {author.name}
                    </a>
                  </p>
                  <div className='flex space-x-1 text-sm text-gray-500'>
                    <time dateTime={date}>{date}</time>
                    <span aria-hidden='true'>&middot;</span>
                    <span>{readTime} para leer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        )
      })}
    </div>
  )
}

export default MainBlog
