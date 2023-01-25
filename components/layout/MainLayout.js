import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Navigation from '../navigation/Navigation'
import { Footer } from '../sections/Footer'

const Layout = ({ children, title, description, ogType, ogUrl, ogImage, ogDescription, schemaObject }) => {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme')
      if (theme) {
        setTheme(theme)
      } else {
        localStorage.setItem('theme', 'light')
        setTheme('light')
      }
    }
  }, [])

  useEffect(() => {
    if (theme !== '' && typeof window !== 'undefined') {
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', theme)
        document.documentElement.classList.add(theme)
        localStorage.setItem('theme', theme)
      } else {
        document.documentElement.setAttribute('data-theme', theme)
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', theme)
      }
    }
  }, [theme])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={ogDescription} />
        <meta property='og:type' content={ogType} />
        <meta property='og:url' content={ogUrl} />
        <meta property='og:image' content={ogImage} />
        <meta property='og:site_name' content='Engel Delgado | Full Stack Developer' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@engeldlgado' />
        <meta name='twitter:creator' content='@engeldlgado' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={ogImage} />
        <meta name='twitter:image:alt' content={title} />
        {/* Canonical */}
        <link rel='canonical' href={ogUrl} />
        {/* Png Favicon / SVG */}
        <link rel='icon' type='image/png' href='/imagenes/favicon.png' />
        {schemaObject && (
          schemaObject.map((item, index) => (
            <script
              key={index}
              type='application/ld+json'
              dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
            />
          ))
        )}
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
        <meta name='bingbot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
      </Head>
      <Navigation
        theme={theme}
        setTheme={setTheme}
      />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
