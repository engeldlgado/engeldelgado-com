import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge'
}

const HOST = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

export default function ogImage (req) {
  try {
    const { searchParams } = new URL(req.url)

    const hasTitle = searchParams.has('title')
    const hasDescription = searchParams.has('excerpt')

    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Engel Delgado - Full Stack Developer'

    const description = hasDescription
      ? searchParams.get('excerpt')?.slice(0, 200)
      : 'Obtén soluciones innovadoras y centradas en el cliente para tu presencia en línea con nuestros servicios de desarrollo web y marketing. Contactanos ahora mismo'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url('${HOST}/imagenes/og.jpg')`,
            backgroundSize: 'cover'
          }}
        >
          <div
            tw='flex h-[627px] w-[1200px] max-w-full px-12 pb-16 items-center justify-between'
          >
            <div tw='flex flex-col w-9/12 py-12 items-center p-8'>
              <h2 tw='text-5xl font-bold tracking-tight text-white text-left' style={{ fontWeight: 600 }}>
                {title}
              </h2>
              <h3 tw='text-white text-left text-2xl mt-6 '>
                {description}
              </h3>
            </div>
            <div tw='mt-8 flex flex-col w-3/12 items-center'>
              <img tw='w-40 h-40' src={`${HOST}/imagenes/profile-pic.png`} alt='Engel Delgado' />
              <img tw='w-80' src={`${HOST}/imagenes/logo-white.png`} alt='Engel Delgado' />
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 627
      }
    )
  } catch (e) {
    console.error(`Error: ${e.message}`)
    return new Response('Failed to generare the OG Image', { status: 500 })
  }
}
