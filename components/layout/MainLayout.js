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
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={ogDescription} />
        <meta property='og:type' content={ogType} />
        <meta property='og:url' content={ogUrl} />
        <meta property='og:image' content={ogImage} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@engeldlgado' />
        <meta name='twitter:creator' content='@engeldlgado' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={ogImage} />
        {/* Png Favicon / SVG */}
        <link rel='icon' href='/favicon.png' />
        <script
          key='structured-data'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObject) }}
        />
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
