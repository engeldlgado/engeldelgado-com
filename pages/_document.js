import { Head, Html, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html id='root' className='scroll-smooth' lang='es' style={{ scrollBehavior: 'smooth' }}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
